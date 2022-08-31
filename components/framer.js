export const tapHoverBtn = {
  tap: { scale: 0.9 },
  hover: {
    scale: 1.1,
    backgroundColor: '#7d26bf',
    transition: {
      duration: 0.2
    }
  },
}

export const transition = {
  hidden: {
    y: '20vh',
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
      type: "spring",
      stiffness: 100,
      damping: 10,
    }
  },
  exit: {
    y: '-20vh',
    opacity: 0,
  }
}