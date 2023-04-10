import { useEffect, useLayoutEffect, useRef, useState } from 'react';

const useLayoutEffectExample = () => {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useLayoutEffect(() => {
    if (!buttonRef.current || !modalRef.current) return;
    const { bottom } = buttonRef.current.getBoundingClientRect();
    modalRef.current.style.top = `${bottom + 60}px`;
  }, [modalIsVisible]);

  return (
    <div style={{ textAlign: 'center' }}>
      <button
        ref={buttonRef}
        onMouseEnter={() => setModalIsVisible((p) => !p)}
        onMouseLeave={() => setModalIsVisible((p) => !p)}>
        Toggle
      </button>
      {modalIsVisible && (
        <div className="ule-modal" ref={modalRef}>
          Modal
        </div>
      )}
    </div>
  );
};

export default useLayoutEffectExample;
