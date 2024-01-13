import { FC, useEffect, useMemo } from "react";
interface Props {
    dissmisable?: boolean,
    showModal: boolean,
    open: Function,
    children?: any
}
export const ModalComponent: FC<Props> = ({ children, showModal, open, dissmisable = true }) => {
    const handleParentClick = (event: any) => {
        // event.preventDefault(); ESTO DA BUG A LOS CHECKBOX
        if (dissmisable) {
            if (event.target === event.currentTarget) {
                open();
            }
        }
    };

    useMemo(() => {
        if (!showModal) {
            const scrollY = document.body.style.top;
            document.body.style.position = '';
            document.body.style.top = '';
            window.scrollTo(0, parseInt(scrollY || '0') * -1);
        } else {
            document.body.style.position = 'fixed';
            document.body.style.width = '100%';
            document.body.style.top = `-${window.scrollY}px`;
        }
    }, [showModal]);

    return (
        <>
            <div className={showModal ? 'opacity-100 z-20' : 'z-20 opacity-0 invisible'}>
                <div className="relative z-20" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                    <div className="fixed z-20 inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                    <div className="fixed z-20 inset-0 z-20 overflow-y-auto">
                        <div onClick={handleParentClick} className="flex min-h-full items-end justify-center text-center sm:items-center sm:p-0">
                            <div className="relative transform overflow-hidden transition-all sm:my-8 sm:w-full">
                                {/* Aqui va la informacion */}
                                {children}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}