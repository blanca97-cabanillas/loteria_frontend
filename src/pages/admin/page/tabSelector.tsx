export default function TabSelector({ tab, tabHandler }) {
    return <div>
        <div className="border-b border-gray-200 dark:border-gray-700">
            <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
                <li className="mr-2 cursor-pointer" onClick={() => tabHandler(1)}>
                    <div className={"inline-flex items-center justify-center p-4  border-b-2 rounded-t-lg group " + (tab === 1 ? 'active border-blue-600 text-blue-600' : 'border-transparent hover:text-gray-600')} aria-current="page">
                        <svg className="w-4 h-4 mr-2 text-gray-400 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                            <path d="M16 14V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v15a3 3 0 0 0 3 3h12a1 1 0 0 0 0-2h-1v-2a2 2 0 0 0 2-2ZM4 2h2v12H4V2Zm8 16H3a1 1 0 0 1 0-2h9v2Z" />
                        </svg>Compras pendientes
                    </div>
                </li>
                <li className="mr-2 cursor-pointer" onClick={() => tabHandler(2)}>
                    <div className={"inline-flex items-center justify-center p-4  border-b-2 rounded-t-lg group " + (tab === 2 ? 'active border-blue-600 text-blue-600' : 'border-transparent hover:text-gray-600')} aria-current="page">
                        <svg className="w-4 h-4 mr-2 text-gray-400 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M15.133 10.632v-1.8a5.406 5.406 0 0 0-4.154-5.262.955.955 0 0 0 .021-.106V1.1a1 1 0 0 0-2 0v2.364a.946.946 0 0 0 .021.106 5.406 5.406 0 0 0-4.154 5.262v1.8C4.867 13.018 3 13.614 3 14.807 3 15.4 3 16 3.538 16h12.924C17 16 17 15.4 17 14.807c0-1.193-1.867-1.789-1.867-4.175ZM4 4a1 1 0 0 1-.707-.293l-1-1a1 1 0 0 1 1.414-1.414l1 1A1 1 0 0 1 4 4ZM2 8H1a1 1 0 0 1 0-2h1a1 1 0 1 1 0 2Zm14-4a1 1 0 0 1-.707-1.707l1-1a1 1 0 1 1 1.414 1.414l-1 1A1 1 0 0 1 16 4Zm3 4h-1a1 1 0 1 1 0-2h1a1 1 0 1 1 0 2ZM6.823 17a3.453 3.453 0 0 0 6.354 0H6.823Z" />
                        </svg>Compras pagadas
                    </div>
                </li>
                <li className="mr-2 cursor-pointer" onClick={() => tabHandler(3)}>
                    <div className={"inline-flex items-center justify-center p-4  border-b-2 rounded-t-lg group " + (tab === 3 ? 'active border-blue-600 text-blue-600' : 'border-transparent hover:text-gray-600')} aria-current="page">
                        <svg className="w-4 h-4 mr-2 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M5 11.424V1a1 1 0 1 0-2 0v10.424a3.228 3.228 0 0 0 0 6.152V19a1 1 0 1 0 2 0v-1.424a3.228 3.228 0 0 0 0-6.152ZM19.25 14.5A3.243 3.243 0 0 0 17 11.424V1a1 1 0 0 0-2 0v10.424a3.227 3.227 0 0 0 0 6.152V19a1 1 0 1 0 2 0v-1.424a3.243 3.243 0 0 0 2.25-3.076Zm-6-9A3.243 3.243 0 0 0 11 2.424V1a1 1 0 0 0-2 0v1.424a3.228 3.228 0 0 0 0 6.152V19a1 1 0 1 0 2 0V8.576A3.243 3.243 0 0 0 13.25 5.5Z" />
                        </svg>Configuracion
                    </div>
                </li>
            </ul>
        </div>
    </div>
}