import React, { useRef, useEffect, ReactElement, useCallback } from 'react';

interface CanvasProps {
   setup: CallableFunction;
   tick: CallableFunction;
   timeout: number;
   width: number | undefined;
   height: number | undefined;
   rest?: unknown;
}

/**
 * To use, import like this:
 * const Canvas = dynamic(() => import('../components/Canvas'), { ssr: false });
 */
const Canvas = (props: CanvasProps): ReactElement => {
   const { setup, tick, timeout, width, height, ...rest } = props;
   const canvasRef = useRef(null);

   const renderLoop = useCallback(
      (ctx) => {
         setTimeout(() => {
            setup(ctx);
            tick();
            requestAnimationFrame(() => renderLoop(ctx));
         }, timeout);
      },
      [setup, timeout, tick]
   );

   useEffect(() => {
      if (canvasRef && canvasRef.current) {
         const canvas: HTMLCanvasElement = canvasRef.current;
         const context = canvas.getContext('2d');

         setup(context);
         requestAnimationFrame(() => renderLoop(context));
      }
   }, [setup, canvasRef, timeout, renderLoop]);

   return <canvas width={width} height={height} ref={canvasRef} {...rest} />;
};

export default Canvas;
