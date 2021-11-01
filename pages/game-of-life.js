import Head from 'next/head';
import dynamic from 'next/dynamic';
import { useEffect, useState, useMemo } from 'react';

const Canvas = dynamic(() => import('../components/Canvas'), { ssr: false });

const CELL_SIZE = 6; //px

const loadWasmInstance = async (importObject) => {
   const fetchPromise = fetch('game-of-life.wasm');
   const { instance } = await WebAssembly.instantiateStreaming(
      fetchPromise,
      importObject
   );
   return instance;
};

const GameOfLife = () => {
   let [instance, setInstance] = useState(null);

   const memory = useMemo(() => new WebAssembly.Memory({ initial: 1 }), []);
   let gridHeight = instance?.exports.get_grid_height() ?? 0;
   let gridWidth = instance?.exports.get_grid_width() ?? 0;
   const cellsStartPtr = instance?.exports.get_cell_start_index() ?? null;

   useEffect(() => {
      // store cell in memory and just loop through and 0 is dead and 1 is alive
      // 'initial: 1' == one page of memory
      const importObject = {
         env: {
            memory: memory,
         },
      };

      loadWasmInstance(importObject).then((inst) => setInstance(inst));
   }, [memory]);

   const drawGridAndCells = (context) => {
      const DEAD = 0;
      const ALIVE = 1;
      const GRID_COLOR = '#CCCCCC';
      const DEAD_COLOR = '#FFFFFF';
      const ALIVE_COLOR = '#000000';

      // Draw Grid
      context.beginPath();
      context.strokeStyle = GRID_COLOR;

      console.log(gridWidth);
      console.log(gridHeight);

      // vertical
      for (let i = 0; i <= gridWidth; i++) {
         context.moveTo(i * (CELL_SIZE + 1) + 1, 0);
         context.lineTo(
            i * (CELL_SIZE + 1) + 1,
            (CELL_SIZE + 1) * gridHeight + 1
         );
      }

      // horizontal
      for (let j = 0; j <= gridHeight; j++) {
         context.moveTo(0, j * (CELL_SIZE + 1) + 1);
         context.lineTo(
            (CELL_SIZE + 1) * gridWidth + 1,
            j * (CELL_SIZE + 1) + 1
         );
      }

      context.stroke();

      // Draw Cells
      if (cellsStartPtr) {
         const cells = new Uint8Array(
            memory.buffer,
            cellsStartPtr,
            gridWidth * gridHeight
         );
         context.beginPath();

         for (let row = 0; row < gridHeight; row++) {
            for (let col = 0; col < gridWidth; col++) {
               // index of cell in grid
               const idx = row * gridWidth + col;

               context.fillStyle =
                  cells[idx] === DEAD ? DEAD_COLOR : ALIVE_COLOR;

               context.fillRect(
                  col * (CELL_SIZE + 1) + 1,
                  row * (CELL_SIZE + 1) + 1,
                  CELL_SIZE,
                  CELL_SIZE
               );
            }
         }

         context.stroke();
      }
   };

   if (instance) {
      instance.exports.init_cells();
   }

   return (
      <div>
         <Head>
            <title>WebAssembly Game of Life</title>
         </Head>

         <div className="row" style={{paddingTop: '1em'}}>
            {instance && (
               <Canvas
                  width={(CELL_SIZE + 1) * gridWidth + 1}
                  height={(CELL_SIZE + 1) * gridHeight + 1}
                  setup={drawGridAndCells}
                  tick={instance.exports.tick}
                  timeout={50}
               />
            )}
         </div>
      </div>
   );
};

export default GameOfLife;
