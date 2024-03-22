

import { Link } from 'react-router-dom'




const Categories = () => {




    const menus = [

        {

            title: 'Shop Surface devices',

            image: "https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/Link-List-Icons-Surface-Devices?wid=40&hei=40",

            path: '/shop-surface'

        },

        {

            title: 'Choose your Microsoft 365',

            image: "https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/Link-List-Icons-Microsoft-365?wid=40&hei=40",

            path: '/ms-365'

        },

        {

            title: 'Shop for your business ',

            image: "https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/Link-List-Icons-Business?wid=40&hei=40",

            path: '/shop-business'

        },

        {

            title: 'Shop for accessories',

            image: "https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/Link-List-Icons-Accessories?wid=40&hei=40",

            path: '/shop-accessories'

        },

        {

            title: 'Shop Xbox games and consoles',

            image: "https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/Link-List-Icons-Xbox-Games-Consoles?wid=40&hei=40",

            path: '/xbox'

        },

    ]

    // const menus = [

    //     {

    //         title: 'Shop Surface devices',

    //         svg: <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 20 20"><path fill="currentColor" d="M4.76 2.453A.5.5 0 0 1 5.26 2H15.5a.5.5 0 0 1 .498.547l-.759 8a.5.5 0 0 1-.498.453h-.665l.919 6.43a.5.5 0 0 1-.99.14L13.638 15h-2.276l-.367 2.57a.5.5 0 0 1-.99-.14l.347-2.43h-2.99l-.367 2.57a.5.5 0 0 1-.99-.14L6.923 11H4.5a.5.5 0 0 1-.498-.547zM7.506 14h2.99l.429-3h-2.99zm4 0h1.99l-.429-3h-1.132zm2.782-4l.663-7H5.713l-.663 7z"/></svg>,

    //         path: '/shop-surface'

    //     },

    //     {

    //         title: 'Choose your Microsoft 365',

    //         svg: <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256"><g fill="none"><g clipPath="url(#skillIconsWindowsLight0)"><path fill="#f4f2ed" d="M196 0H60C26.863 0 0 26.863 0 60v136c0 33.137 26.863 60 60 60h136c33.137 0 60-26.863 60-60V60c0-33.137-26.863-60-60-60"/><path fill="#00adef" d="m40 65.663l70.968-9.665l.032 68.455l-70.934.404zm70.935 66.677l.055 68.515l-70.934-9.753l-.004-59.221zm8.602-77.607L213.636 41v82.582l-94.099.748zm94.121 78.251l-.022 82.211l-94.099-13.281l-.131-69.083z"/></g><defs><clipPath id="skillIconsWindowsLight0"><path fill="#fff" d="M0 0h256v256H0z"/></clipPath></defs></g></svg>,

    //         path: '/ms-365'

    //     },

    //     {

    //         title: 'Shop for your business ',

    //        svg: <svg xmlns="http://www.w3.org/2000/svg" width="1.19em" height="1em" viewBox="0 0 552 465"><path fill="currentColor" d="M477 401v39H100v-39H88v-1l-7-1v-1h-4v-1l-4-1v-1h-3v-1h-2v-1h-2l-1-2l-4-1l-2-3h-2l-4-5l-4-3v-2l-2-1l-1-4l-2-1v-2h-1v-3h-1v-2h-1v-3h-1v-27h1v-13h1v-14h1v-12h1v-12h1v-14h1v-11h1v-14h1l1-26h1l1-18v-10h1v-13h1v-9h1v-15h1l1-24h1v-13h1v-13h1V89h1V76h1V64l7-16l2-1v-2l2-1l6-7h2l3-4l4-1l1-2h2v-1h2v-1l9-2v-1h2v-1h5v-1h6v-1h326c6.833 0 15.779-.514 21 1l11 1v1l6 1v1h2v1h3v1h2v1h2l1 2l4 1l2 3h2l2 3l6 5v2l3 2v2h1v2h1v2h1v2h1v2h1v3h1c1.777 4.982 1.992 12.481 2 19v9h1v11h1v13h1v13h1v13h1v14h1v13h1v13h1v13h1v11h1v13h1v13h1l1 16v11h1v13h1v13h1v11h1v13h1v13h1v14h1v27h-1l-1 6h-1l-2 6h-1v2l-2 1v2l-9 8l-3 4h-2l-1 2l-4 1l-1 2h-2v1h-3v1h-2v1h-3v1h-2v1ZM68 200h439l-1-28h-1v-13h-1v-12h-1v-13h-1v-13h-1v-14h-1V94h-1l-1-25h-1l-1-6h-1l-1-4h-1v-2l-8-7l-2-3h-2l-1-2h-2v-1h-2v-1l-5-1v-1h-3v-1h-5v-1H181c-29.808 0-71.054-4.188-89 8l-2 3l-8 7v2h-1l-1 4h-1l-1 6h-1l-1 28h-1v11h-1v13h-1v13h-1l-1 16v11h-1v13c-2.043 7.284-1.983 16.74-2 26m-3 24l-1 27h-1v13h-1v11h-1v13h-1v13h-1v14s-.835.1-1 2v11h-1v13h-1v16h1v2h1v2h1v3l2 1v2l6 5l3 4l4 1l1 2l14 5h5v1h367c10.061 0 21.388.733 29-2v-1h3v-1h2v-1h3v-1h2l1-2h2l1-2h2l3-4l5-4l1-4h1l1-4h1v-3h1v-16h-1v-14h-1v-3l-7-99z" className="cls-1"/></svg>,

    //         path: '/shop-business'

    //     },

    //     {

    //         title: 'Shop for accessories',

    //         svg: <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><path fill="currentColor" d="M12.5 10h-9a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1M8.25 9a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5m-2-2a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5m-1 2a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5M4 6.25a.75.75 0 1 0-1.5 0a.75.75 0 0 0 1.5 0m10 2.4v2.6a.755.755 0 0 1-.75.75H2.75a.755.755 0 0 1-.75-.75v-6.5A.755.755 0 0 1 2.75 4H9V3H2.75A1.746 1.746 0 0 0 1 4.75v6.5A1.746 1.746 0 0 0 2.75 13h10.5A1.747 1.747 0 0 0 15 11.25V7.94a3.09 3.09 0 0 1-1 .71M3 10.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 0-1h-9a.5.5 0 0 0-.5.5m6-2.25a.75.75 0 1 0-1.5 0a.75.75 0 0 0 1.5 0m-2-2a.75.75 0 1 0-1.5 0a.75.75 0 0 0 1.5 0m-2.5 2a.75.75 0 1 0 1.5 0a.75.75 0 0 0-1.5 0m-.5-2a.75.75 0 1 0-1.5 0a.75.75 0 0 0 1.5 0M8.25 7.5a.75.75 0 1 0 0 1.5a.75.75 0 0 0 0-1.5m-3 0a.75.75 0 1 0 0 1.5a.75.75 0 0 0 0-1.5m1-2a.75.75 0 1 0 0 1.5a.75.75 0 0 0 0-1.5m-3 0a.75.75 0 1 0 0 1.5a.75.75 0 0 0 0-1.5M12.5 10h-9a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1m1-9h-2A1.5 1.5 0 0 0 10 2.5v3a2.5 2.5 0 0 0 5 0v-3A1.5 1.5 0 0 0 13.5 1m.5 4.5a1.5 1.5 0 1 1-3 0v-3a.5.5 0 0 1 .5-.5h.5v1.5a.5.5 0 0 0 1 0V2h.5a.5.5 0 0 1 .5.5z"/></svg>,

    //         path: '/shop-accessories'

    //     },

    //     {

    //         title: 'Shop Xbox games and consoles',

    //         svg: <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><path fill="currentColor" d="M7.202 15.967a8 8 0 0 1-3.552-1.26c-.898-.585-1.101-.826-1.101-1.306c0-.965 1.062-2.656 2.879-4.583C6.459 7.723 7.897 6.44 8.052 6.475c.302.068 2.718 2.423 3.622 3.531c1.43 1.753 2.088 3.189 1.754 3.829c-.254.486-1.83 1.437-2.987 1.802c-.954.301-2.207.429-3.239.33m-5.866-3.57C.589 11.253.212 10.127.03 8.497c-.06-.539-.038-.846.137-1.95c.218-1.377 1.002-2.97 1.945-3.95c.401-.417.437-.427.926-.263c.595.2 1.23.638 2.213 1.528l.574.519l-.313.385C4.056 6.553 2.52 9.086 1.94 10.653c-.315.852-.442 1.707-.306 2.063c.091.24.007.15-.3-.319Zm13.101.195c.074-.36-.019-1.02-.238-1.687c-.473-1.443-2.055-4.128-3.508-5.953l-.457-.575l.494-.454c.646-.593 1.095-.948 1.58-1.25c.381-.237.927-.448 1.161-.448c.145 0 .654.528 1.065 1.104a8.4 8.4 0 0 1 1.343 3.102c.153.728.166 2.286.024 3.012a9.5 9.5 0 0 1-.6 1.893c-.179.393-.624 1.156-.82 1.404c-.1.128-.1.127-.043-.148ZM7.335 1.952c-.67-.34-1.704-.705-2.276-.803a4 4 0 0 0-.759-.043c-.471.024-.45 0 .306-.358A7.8 7.8 0 0 1 6.47.128c.8-.169 2.306-.17 3.094-.005c.85.18 1.853.552 2.418.9l.168.103l-.385-.02c-.766-.038-1.88.27-3.078.853c-.361.176-.676.316-.699.312a12 12 0 0 1-.654-.319Z"/></svg>,

    //         path: '/xbox'

    //     },

    // ]


    return (

        <div className='pt-10 pb-20'>

            <div className='flex flex-col lg:flex-row text-xl justify-center items-center gap-10'>

                {

                    menus.map((menu, idx) =>

                        <Link key={idx} to={`/extra/${menu.title}`} className='flex justify-center items-center flex-col gap-2'>

                            <img src={menu.image} alt="cat-image" className='h-20 w-20 bg-white' />

                            <h1 className='font-bold underline dark:text-white text-blue-700'>{menu.title}</h1>

                        </Link>

                    )

                }

            </div>

        </div>

    )

}




export default Categories