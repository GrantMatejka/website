'use client';

// const GameOfLife = () => {
//    const [instance, setInstance] = useState()

//    const memory = useMemo(() => new WebAssembly.Memory({ initial: 1 }), []);

//    fetch('game-of-life.wasm').then(resp => {
//       console.log(resp)
//       return WebAssembly.instantiateStreaming(
//       resp,
//       {
//          env: {
//             memory
//          },
//       })
//    }).then(setInstance);

//    const gridHeight = instance?.exports.get_grid_height();
//    const gridWidth = instance?.exports.get_grid_width();
//    const cellsStartPtr = instance?.exports.get_cell_start_index();
//    const tick = instance?.exports.tick;

//    const canvasRef = useRef(null);
//    const timeout = 50;

//    const renderLoop = useCallback(
//       (ctx) => {
//          setTimeout(() => {
//             drawGridAndCells(ctx);
//             tick();
//             requestAnimationFrame(() => renderLoop(ctx));
//          }, timeout);
//       },
//       [timeout, tick]
//    );

//    useEffect(() => {
//       if (canvasRef && canvasRef.current) {
//          const canvas = canvasRef.current;
//          const context = canvas.getContext('2d');

//          drawGridAndCells(context);
//          requestAnimationFrame(() => renderLoop(context));
//       }
//    }, [canvasRef, timeout, renderLoop]);

//    if (instance == null) {
//       return <></>
//    }

//    instance.exports.init_cells();

//    const drawGridAndCells = (context) => {
//       // Draw Grid
//       context.beginPath();
//       context.strokeStyle = GRID_COLOR;

//       // vertical
//       for (let i = 0; i <= gridWidth; i++) {
//          context.moveTo(i * (CELL_SIZE + 1) + 1, 0);
//          context.lineTo(
//             i * (CELL_SIZE + 1) + 1,
//             (CELL_SIZE + 1) * gridHeight + 1
//          );
//       }

//       // horizontal
//       for (let j = 0; j <= gridHeight; j++) {
//          context.moveTo(0, j * (CELL_SIZE + 1) + 1);
//          context.lineTo(
//             (CELL_SIZE + 1) * gridWidth + 1,
//             j * (CELL_SIZE + 1) + 1
//          );
//       }

//       context.stroke();

//       // Draw Cells
//       if (cellsStartPtr) {
//          const cells = new Uint8Array(
//             memory.buffer,
//             cellsStartPtr,
//             gridWidth * gridHeight
//          );
//          context.beginPath();

//          for (let row = 0; row < gridHeight; row++) {
//             for (let col = 0; col < gridWidth; col++) {
//                // index of cell in grid
//                const idx = row * gridWidth + col;

//                context.fillStyle =
//                   cells[idx] === DEAD ? DEAD_COLOR : ALIVE_COLOR;

//                context.fillRect(
//                   col * (CELL_SIZE + 1) + 1,
//                   row * (CELL_SIZE + 1) + 1,
//                   CELL_SIZE,
//                   CELL_SIZE
//                );
//             }
//          }

//          context.stroke();
//       }
//    };

//    return (
//       <div>
//          <Head>
//             <title>WebAssembly Game of Life</title>
//          </Head>

//          <div className="row" style={{ paddingTop: '1em' }}>
//          <canvas
//        width={(CELL_SIZE + 1) * width + 1}
//        height={(CELL_SIZE + 1) * height + 1}
//        ref={canvasRef}
//     />
//          </div>
//       </div>
//    );
// };

const GameOfLife = () => {
  return <p>WIP as I convert to server component</p>;
};

export default GameOfLife;
