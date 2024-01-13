export default function PaginadorTabla({pagina, pages, handlerPagina}){
    function clickPagina(index) {        
        handlerPagina(index);
    }
    function renderPaginado() {
        let listElements = [];
        for (let index = 1; index <= pages; index++) {
            listElements.push(<li key={index}>
                <a href="#" onClick={() => clickPagina(index)} className={"flex items-center justify-center px-3 h-8 leading-tight text-gray-500 border border-gray-300 hover:bg-gray-100 hover:text-gray-700 "+(pagina === index ? 'text-primary bg-green-200':'')}>{index}</a>
            </li>)
        }
        return listElements;
    }
    return <div className="grid justify-items-center mt-4">
        <nav aria-label="Page navigation example">
                <ul className="flex items-center -space-x-px h-8 text-sm">
                    <li>
                        <a href="#" className="flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                            <span className="sr-only">Previous</span>
                            <svg className="w-2.5 h-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 1 1 5l4 4" />
                            </svg>
                        </a>
                    </li>
                    {renderPaginado()}
                    <li>
                        <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                            <span className="sr-only">Next</span>
                            <svg className="w-2.5 h-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 9 4-4-4-4" />
                            </svg>
                        </a>
                    </li>
                </ul>
            </nav>
    </div>
}