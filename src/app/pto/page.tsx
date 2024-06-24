'use client'
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';

const text = "text-white text-4xl pl-2 select-none"

function Page() {
    const [activeSection, setActiveSection] = useState('familiar');
    const [isLandscape, setIsLandscape] = useState(window.innerWidth > window.innerHeight);

    // Escuchar cambios en la orientación de la pantalla
    useEffect(() => {
        const handleResize = () => {
            setIsLandscape(window.innerWidth > window.innerHeight);
        };

        window.addEventListener('resize', handleResize);

        // Limpiar el evento al desmontar el componente
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Función para cambiar la sección activa solo si la sección clickeada no está ya activa
    const toggleSection = (section: string) => {
        if (activeSection !== section) {
            setActiveSection(activeSection === 'familiar' ? 'express' : 'familiar');
        }
    };

    // Calcular los anchos basados en la orientación y la sección activa
    const calculateWidths = (section: string) => {
        if (isLandscape) {
            return section === activeSection ? '95%' : '5%';
        } else {
            return section === activeSection ? '85%' : '15%';
        }
    };

    return (
        <>
            <Head>
                <title>Secciones Dinámicas</title>
            </Head>
            <div className="flex w-[100%] h-[100vh] overflow-hidden">
                <motion.div
                    className={`flex justify-center items-center bg-green-900 ${activeSection === 'familiar' ? 'w-[85%] ' : 'w-[15%]'}`}
                    animate={{ width: calculateWidths('familiar') }}
                    transition={{ duration: 0.18 }}
                    onClick={() => toggleSection('familiar')}
                >
                    <motion.h2
                        className={text}
                        initial={{ opacity: 1 }}
                        animate={{ opacity: activeSection === 'familiar' ? 1 : 0 }}
                        transition={{ duration: 0.1 }}
                    >
                        Familiar
                    </motion.h2>
                </motion.div>
                <motion.div
                    className={`flex justify-center items-center bg-black/80 ${activeSection === 'express' ? 'w-[85%] ' : 'w-[15%]'}`}
                    animate={{ width: calculateWidths('express') }}
                    transition={{ duration: 0.18 }}
                    onClick={() => toggleSection('express')}
                >
                    <motion.h2
                        className={text}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: activeSection === 'express' ? 1 : 0 }}
                        transition={{ duration: 0.1, delay: 0 }}
                    >
                        Express
                    </motion.h2>
                </motion.div>
            </div>
        </>
    )
}

export default Page;
