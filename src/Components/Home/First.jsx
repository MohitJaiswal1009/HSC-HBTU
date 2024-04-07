import React, { useEffect, useRef ,lazy} from 'react';
import webGLFluidEnhanced from 'webgl-fluid-enhanced';

// const webGLFluidEnhanced = lazy(() => import ('webgl-fluid-enhanced')) ;

const First = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        webGLFluidEnhanced.simulation(canvasRef.current, {
            QUALITY: 'LOW',
            SIM_RESOLUTION: 128,
            DENSITY_DISSIPATION: 0.8,
            DENSITY_DIFFUSION: 1,
            PRESSURE_ITERATIONS: 30,
            COLOR_PALETTE: ['#fcff00', '#5603BD', '#ff0097', '#009665', '#00e0d8'],
        });
    }, []);

    return <canvas ref={canvasRef} style={{ width: '100vw', height: '100vh' }} />;
}

export default First;
