import React, { useRef, useEffect, ReactElement, useCallback } from 'react';

// interface CanvasProps {
//    setup: CallableFunction;
//    renderLoop: CallableFunction | FrameRequestCallback;
//    timeout: number;
//    width: number | undefined;
//    height: number | undefined;
//    rest: unknown;
// }

/**
 * To use, import like this:
 * const Canvas = dynamic(() => import('../components/Canvas'), { ssr: false });
 */
const Canvas = (props) => {
   const { setup, tick, timeout, width, height, ...rest } = props;
   const canvasRef = useRef(null);

   const renderLoop = useCallback((ctx) => {
      setTimeout(() => {
         setup(ctx);
         tick();
         requestAnimationFrame(() => renderLoop(ctx));
      }, timeout);
   }, [setup, timeout, tick]);

   useEffect(() => {
      if (canvasRef && canvasRef.current) {
         const canvas = canvasRef.current;
         const context = canvas.getContext('2d');

         setup(context);
         requestAnimationFrame(() => renderLoop(context));
      }
   }, [setup, canvasRef, timeout, renderLoop]);

   return <canvas width={width} height={height} ref={canvasRef} {...rest} />;
};

export default Canvas;
