import { useState } from "react";

const PAGINDOR_ELEMENTS = 500;
export default function PaginadorBoletos({ total, handleClick }) {
    const [selected, setSelected] = useState(1);
    function clickPagina(index) {  
        console.log(index);      
        setSelected(index);
        let limitTop = index * PAGINDOR_ELEMENTS;
        let limitBot = limitTop - PAGINDOR_ELEMENTS + 1;
        handleClick(limitBot,limitTop);
    }
    function masMenos(o){
        const PAGINAS = total / PAGINDOR_ELEMENTS;
        console.log(o);
        if(o === '+' && selected < PAGINAS){
            clickPagina(selected+1);
        }
        if(o === '-' && selected > 1){
            clickPagina(selected-1);
        }
    }
    function renderPaginado() {
        const PAGINAS = total / PAGINDOR_ELEMENTS;
        let listElements = [];
        for (let index = 1; index <= PAGINAS; index++) {
            listElements.push(<li key={index}>
                <a href="#" onClick={() => clickPagina(index)} className={"flex items-center justify-center px-3 h-8 leading-tight text-gray-500 border border-gray-300 hover:bg-gray-100 hover:text-gray-700 "+(selected === index ? 'text-primary bg-green-200':'')}>{index}</a>
            </li>)
        }
        return listElements;
    }
    return <>
        <div>
            <nav aria-label="Page navigation example">
                <ul className="flex items-center -space-x-px h-8 text-sm">
                    <li onClick={() => masMenos('-')}>
                        <div className="flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                            <span className="sr-only">Previous</span>
                            <svg className="w-2.5 h-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 1 1 5l4 4" />
                            </svg>
                        </div>
                    </li>
                    {/* {renderPaginado()} */}
                    <li onClick={() => masMenos('+')}>
                        <div className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                            <span className="sr-only">Next</span>
                            <svg className="w-2.5 h-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 9 4-4-4-4" />
                            </svg>
                        </div>
                    </li>
                </ul>
            </nav>
        </div>

    </>
}