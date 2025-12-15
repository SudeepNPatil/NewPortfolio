import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Menu, X, Eye, EyeOff } from 'lucide-react';
import Sudeep from '../assets/Sudeep.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [forceExpanded, setForceExpanded] = useState(false);
  const [hideMini, setHideMini] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
        setForceExpanded(false);
      } else {
        setIsScrolled(false);
        setHideMini(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isMinimized = isScrolled && !forceExpanded;

  return (
    <>
      <motion.nav
        layout
        transition={{ type: 'tween', ease: 'easeOut', duration: 0.45 }}
        className="fixed z-50 bg-white text-black shadow-lg border hidden md:block"
        animate={
          isMinimized
            ? {
                width: hideMini ? 60 : 240,
                height: 240,
                bottom: 0,
                right: 0,
                top: 'auto',
                left: 'auto',
                borderTopLeftRadius: 999,
              }
            : {
                width: '60vw',
                height: 64,
                top: 24,
                left: '50%',
                x: '-50%',
                bottom: 'auto',
                right: 'auto',
                borderRadius: 40,
              }
        }
      >
        {isMinimized && (
          <button
            onClick={() => setHideMini(!hideMini)}
            className="absolute top-6 left-5 z-50 bg-black text-white p-2 rounded-full"
          >
            {hideMini ? <Eye size={18} /> : <EyeOff size={18} />}
          </button>
        )}

        <motion.div
          className={`flex h-full ${
            isMinimized
              ? 'items-end justify-end '
              : 'px-14 items-center justify-between'
          }`}
        >
          {isMinimized ? (
            <AnimatePresence>
              {!hideMini && (
                <motion.img
                  onMouseEnter={() => {
                    if (isMinimized && !hideMini) setForceExpanded(true);
                  }}
                  src={Sudeep}
                  alt="Sudeep"
                  initial={{ x: 120, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: 120, opacity: 0 }}
                  transition={{ duration: 0.35 }}
                  className="w-[85%] object-contain"
                />
              )}
            </AnimatePresence>
          ) : (
            <>
              <Link to="/Home" className="font-bold text-xl">
                Sudeep
              </Link>

              <div className="flex gap-8">
                {['Home', 'Projects', 'Blogs', 'Meetups'].map((item) => (
                  <Link
                    key={item}
                    to={`/${item}`}
                    className="px-4 py-2 rounded-3xl hover:bg-black hover:text-white transition"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </>
          )}
        </motion.div>
      </motion.nav>

      <nav className="fixed top-4 left-4 right-4 z-50 md:hidden bg-white rounded-3xl shadow-lg">
        <div className="flex items-center justify-between px-5 py-3">
          <Link to={`/Home`} className="font-bold">
            Sudeep
          </Link>
          <button onClick={() => setMobileOpen(true)}>
            <Menu />
          </button>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden border-t"
            >
              <div className="flex flex-col p-4 gap-3">
                <button
                  onClick={() => setMobileOpen(false)}
                  className="self-end mb-2"
                >
                  <X />
                </button>

                {['Home', 'Projects', 'Blogs', 'Meetups'].map((item) => (
                  <Link
                    key={item}
                    to={`/${item}`}
                    onClick={() => setMobileOpen(false)}
                    className="px-4 py-2 rounded-xl hover:bg-black hover:text-white transition"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;
