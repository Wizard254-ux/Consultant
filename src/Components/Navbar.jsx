import React from 'react'
import { useNavigate } from 'react-router-dom'

function Navbar({displaySideBar, isSideBar}) {
    const navigate = useNavigate()

    const goTo = (page) => {
        navigate(page)
        // Close sidebar when navigating on mobile
        displaySideBar(false)
    }

    const handleOverlayClick = () => {
        displaySideBar(false)
    }

    return (
        <>
            {/* Overlay */}
            {isSideBar && (
                <div 
                    className="fixed inset-0 bg-black bg-opacity-70 z-[3000] md:hidden"
                    onClick={handleOverlayClick}
                />
            )}
            
            <nav className="flex flex-row justify-between gap-3 items-center px-5 bg-slate-100 sticky top-0 z-[4000] shadow-lg">
                <div className="rounded-full justify-center flex  flex-row gap-2 items-center ">
                    <img 
                        className="w-[50px] h-[50px] rounded-md bg-transparent my-0  md:my-4" 
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAP0AAADHCAMAAADlCqUFAAAA/FBMVEUAAAD////tHSZ6enrMzMzh4eGLi4u6uro1NTXq6uqlpaWRDxRqamojIyNycnItLS1eXl5SCQ2dnZ34+PhkZGTGxsb1ICfxHiEbGxvw8PDtHSRRCg3v7+/S0tLPHSQ6Ojqvr6/BFxxUVFSDg4OVlZUmDA75HCbTGiCXl5dJSUnb29t+fn4ODg6kFBcoKChDQ0PYGzA1DA/yGTLlGiXKHCtBCAtkDBLxGjN3EReZExVKCQ69FyKMDxd8DRafFSH4GyHfGCkbBAWBDh96Cg5gBxQOAAM7BAwqCAu1FyapEipjEx3/GjOFEB86Cw/MGRNvDxNLFBmjFB+WHCzDEywbdRUQAAAOPUlEQVR4nO1di1bbuhK1VSgtr5YCEhWHkEDrnFMILTGEkAQcXoV7KM3l9v//5Vp+xKOxZOdB4iR4r1VKEtmZbUkzI81oMIwcOXLkyJEjR44co8W33awlyBD75mbWImSHw8+m+TFrITJD0TTNb1kLkRWOTIGDrMXICHMe+8+HWcuRCTZMH4tZC5IJ3gfszaOsJckAb0Pyr9LqrXfZv0KrV4zIm/NZCzNu7JoQb7MWZ8zYkdivvy6rt2HKKGYt0FjxHrE332Ut0RjxBZM3d7IWaYyIkTfN5axlGhsWFOzfZy3UuPCPgvzrsXo7SvZm1mKNB6tq8uZC1oKNBX9p2Jvfs5ZsDPikI/8aNrlW1rXszY2shRs5VNYuxF9ZCzdqqK1diL+zFm/E+CbTXUT0V7KWb6R4I5OdNxD92bZ6n2NqDinBvawlHCFQT4vtTDQaZtjqHalm+bz83pushRwZNpHK897ck9/8nLGMIwPiGVp35TOZPaAxvh+8vSK/vf4hUyFHhX2dfkOe/0yGdg6RtdvTfvJPhlKOCgl+DVrxz2Bo54PM0JRmN9IIs5fQMCcT/CR9iNY+M2f1NpL5oXXvrFk9FLzBYxtZPXO2rN5bmdxcrMHfcoOZsnqHaCW3Gm+C9jpnKaGhKFNT9D22ejMU2tk1MRRROxTj2I+3mFLEgzeKrkWPaH1r/HKOBMsx8qb5Jd4MTY/iuMUcEeYV7BVde4RU42wkr8dTFTRdixrORkKDkrwyaoesnsIuTh10wRtF1+69lTAD7PXBmxkglwpNqoI5Uw6NDiprF+JT+uVTjlhiHsSsZ2jqUxUEZmolF8cWcmD+eUVRu5i1K+p3tWcQiu26VxO1i6UqiEWrJpo1g4ilKgi8kqhdLDHBz8jCOx2zmquiSFVIeHvG8E7XyelWb2/Zx4aH5Wlc6KMJHrm1Byp1ICEl9DEFSEjJQKZAEbXTPrlpAaIIDftH+aP1+MUowWd92s6qIqdOHt4xFzCGKVeN2lQFARy1U6g1dP10Ja+npGCiqJ0itKP0lKYEiakKAulRuylOaEjV2eldO71pfMheq5YyyCQoDmRNbUJDD8tY1LUKq7clt5ias6ooVUEdk0m3eii0MyVWD6ffqa1VD1G7qUxoQLFY3YED1LXpCQ1TYfXQ2m5du4BHm92KhAbF3tCkAyXm6Q8apeeqfJdbTEFdouVUTl2gINcsJDQga5d0rD49VwWrxklf66Um5kEgq6fQj33dLnPgxDyUbN6SX+JQT7rVm+yzqskTtWM15DfSc1X6UCOZAwVvcBkdmxXQBcjqKRIakGqc5AoNyVq8xTi9kN9K71qsGifX6iEuyDn7yglhNrok3TuYGquHxjFyzCuUcE4v5TeRQ6PwDHtQjROBZM99zeHM7X1yKr+dviroacmYOQ5lKfHarswY54zwEroqPbTThwOVHZJX7HXK3Z4XU/9W/gB1rSKhAe3/T6TVw9YOfdwWzAU4VnyoaxVWD6lGxYIgcyTn158zEsJCHh/qWsUuIFKNE1iXKHkr4t4iEewr+cP0qF2PGybZAW1nIWtXorZth+zps/whTmhQODTJy4fMkXySeJtUbdD5FFk9FPnZ2X+LsI9m/oTlen1AnYOCNwVOICiyerhr0zFZVi859HBDCUJNbnCg5qjHROV6pZyjtTF50kYtvqlJ6jFJCQ0JqQouLjF31+/5JTf5qOaYgMnJ9UrOxHmyfcYcsuf3cqNNNUc9Jie0k5iqYDQDxpA/YRW5EY55p2NSrF5ymskaFZaeI/YcW73kXHYFJsTq4W5DM7JMgpGPJj+2etqSizpMRoZzsqN6wzhRseekIzd8o+aohyLqPX6krD/tWKeHz6KMWk6l1UtOVahQHoenBWx2LjfdU3NM6PzsKzQkb06cUuaDCjAmv0JrvaSik0pkbvUOd+Yh3qPtrMtCEpbkxivzfQJ/W44cOXLkyJEjR44cOXJosbozB6AOnC1EDfQ3WphLwOZC8dNqlIL4pfulO5pdu8Pu7XbUWbuLUO6dQXcAUHRF+VVgL0p7H3weVYVv4d3BEleTjg5ipcrDGniPYLAdAHRoSn0sBqTpaG/UC3vTnPelHJ49rm8z0A5A/E97qMbQy7EPtmmGZo//8NxglT1wLUR1ntwLsvdzkYZmH6/mNkBmryq0UBwte4/usOz347cd4DyLMqwUVyAvyn7hBdh/jt+2//Ms6s3VuAJ5Ufbzw7NXh4P6PcWpKQwW20J8UfZibA3HXvNXmPpMcIOKE24yxxRIn+x3tj4gLMPU1u/DsoeqGs7d/hLcgEifJRWAjwb0yV6lfsEwG5Y9zH1agN5aXxEvqDj3pZGLo6YvwB58PCx72E9HEot+jvACxSk0ERxPKEr1AuxB8E5mv7qCp4nACsiTQJygqi4asunv3d+FilMkjcLDwEiBvAT7aK2w22coC7EHc8hLc4fZk8We2YOL5mOPQz4X8gLsIxmFyEOwX419Aju/1/PbcKD7c+9Qq0CGZw9kRva+X/ZAlkBIGFnv0d+FSi48BgCjtNJip2/2Hxc/QSxCg7c5FHuo5EILB92W3vxdqDi73g10IGFaSv99n0Bvfyj2QMSucoJJhD0l+cALIs8WJqQVh2KfkJu0NQx7eNtoIwZ2ZS/Fe2HyCDATUIEAf3eQea/LSfX2zgZlD+v3zKvf7sHf1VkJ6PuCxc5AWk9dYNc/izUoe3gdnOFQhacf3gd9vP59a6ULqfOj/cbBdD6uqwpkHpC97I9GYm/tgq9KzWt+G/sGFaITYQNavHexCsPzwRk7wP7LxrICG2CCR+zn8P2USPt7qz1myXdz4we191vSBtT6Qnf1NJif32uuVzL5XnNFuwpkcG9nqwup8WDsVX+aQYViEvmkP9EsI1zsvISfPzz7pDrlMpLOsMb3cXUIN/ch+xUltsbAPrFOuYSEo1z9pIh/6fV7N0fPvjdV7UOf3tfP8YBgc38i2PdzoEl7gBmuiN7jA2EeoDFenBj28GzApkrsfei/6sp2wDYanxg+5aMJYQ9VtaYsA+xXzWIH+ri68QFn2MKEsIcDUrd3C50hdcdCItoDL7hR9uzhPq7WlYWNlLHoWLcqAU9P7EwEe9it+pgNVOiKmi1SGcMEnwDS3VCHzWTMSdGMVPZATI1+Ah1QlNeeCUtYyZjHi1Xt7r8JcZBUzWj3IGrnds7qmxS4jba6lyTe2cfHqLFmEzqS4GAvau/+d5CUqr8Ryb0/LQUqc+TIkSPHxGDt+rounySu3dx0ayoc397ehW/XnoJfLi6CSkNXa7XgLN7PNVFy7+fttv/y6+1aCPfejZr4sFFbC+50X6uFN73qgC8bO5aIQx8pbXdr5zRKjuMwwps+1euz6kPwiWV5p83POaXVR+pd0KFWwOg/Zz/cn88kKEH0r2U9Pj5S95/VNIySJerxlchjcGT3l2X5d7/9TauEUt5Ep/jHg/sypbR8Yrs///jv1Jlj8ULZZrbtidqpVklAkDqC/TPj9sOJY1vi/GmNs6CzffYV3vZf/vfk5KRQJe2TPyeXLm9+Yoif4bO54PRY/N+ijFRt92kSOxwWY8Tdb0orYuieFoKT5DXCbW8gdtqci1/qVcLb/uimjkv4yS8vdtrm1O2vDnPCvq967Fk7uvtVlQQjquTVYiwxzvxxdME89heElMUjvn+mjP8cNdkYKpzfBL+2qVN3H4fdLaB0bHs9dX1mczF4XVSpy75GqTfnLwqFmhj5iD1tR3f/ehYW4QvYc0KoN6B89qes+iOY/kuWhU9yjxxXNm2Gv983tl31dGnR7hC8pfSX2/eEt6jjDYeQPVBSHcp6Y++NfFp4oN7Y99lXqN3Vto3G9p0xXvwKaEUowC5oix6rU3bc9GX22B/btL3dbZLMvkqD48kh+7JhU6E7bjz2HJfoGw5Xa73CH93PlMg3uAeDwTCa4lHUGTu9somoqEUFe5cmY4Wlmo49KDv3laK+J2WjY4mh4/X9lUVRkTZPhEjIbf8n/K/7Ynutga9seMfhLQv8J72gwU/H2Q7YoxJ5p5yCEireML1grCEMWy1kb7TKotSK7Ulei9ifpbN3+959pPade1Pr2Php+YVZHy1fOl8h/u+MUGalgToWrmnrs2fM8QoD+D9VL5hFNeyfOOz7BzGM64K9a7BdwWlYZKFWKTO/ZSeRPYlGvm/v3ZtccfpsXFCX/X3A3vZAuP/cf1Wj2gZJcGJa8n6pR7R856LFcGnQMgU3LVB/3jeELahWDAZKTJyWOaulsscWT9y8UyWNG9H3BgGPusGCabDWavXG4cYYEqcMVMi7u7sS3R3VTjql/FKwp2KG1Ym1BtkbV4wseSM/0ACqeR+z996jbfKyz74JyhMuhbNxjChxO1QeD7YQ9edjVDSuQOiVoO2xN04smwv2nXLZ58vIuXh+LBjcBRX7qor9PedlLtjXLCd0oo/jtalHjydCfM/OWAom0qXFml89eZr+WHR9PY+9q/c99g1KfovXrtoWV/52uPfxEifXRszeK9m7DiL32BtNhz54Hu+aTej4fT3jlnNaqCxV2oQSf93RdMiP5tJl0w4qaNXPqv7wqFPijfyTM1JotZrcp7LtELt5/uw6yl7fuX3fEhPXUycue1nnB+xd5U889kapSuzSw4OoWVgfF2WIpxNXfbqwm+EUbLWr7kLHsdp+nfDr6mMjlNlb5Rh/iGszmVXwL7h1H9yjxYivwCpMWCvHd6K+nj2G7B3Y98Y9YY7H3rhsu+bNXer8iFnvMaFxXiqVlp6iNw47zVKzGTqB//45CT67b5b8B7JdKZWakZPYcVs/B9LfuL8L+JPlz5+gR89Ll97P0Jmol0qBcr1zf21WsuKeI0eOHDly5MiRY7Lxf01QfaW10NdYAAAAAElFTkSuQmCC" 
                            alt="Alpha Consultancy Logo" 
                    />
                    <h1 className="text-xl font-bold tracking-wide font-serif">Alpha Consultancy</h1>
                </div> 

                <ul className={`
                    md:flex md:flex-row md:bg-transparent md:relative md:w-auto md:h-auto md:justify-center md:space-x-6 md:py-4
                    fixed top-0 left-0 h-full w-[50%] bg-gray-400 justify-start 
                    flex flex-col 
                    transform transition-transform duration-300
                    ${isSideBar ? 'translate-x-0' : '-translate-x-full'}
                    md:translate-x-0
                `}>
                    <li>
                        <span 
                            onClick={() => goTo('/')} 
                            className="block border-b-4 border-s-white hover:cursor-pointer py-3 px-4 mt-4 md:mt-0 md:bg-gray-200 md:hover:bg-gray-300 hover:bg-gray-200 hover:text-black text-md rounded-md transition-colors duration-300"
                        >
                            <i className="fas fa-home mr-2"></i> Home
                        </span>
                    </li>
                    <li>
                        <span 
                            onClick={() => goTo('/Services')}
                            className="md:buttons hover:cursor-pointer border-b-4 border-s-white block py-3 px-4 md:bg-gray-200 md:hover:bg-gray-300 hover:bg-gray-200 hover:text-black text-md rounded-md transition-colors duration-300"
                        >
                            <i className="fa fa-wrench mr-2" aria-hidden="true"></i>Services
                        </span>
                    </li>
                    <li>
                        <span 
                            onClick={() => goTo('/Gallery')}
                            className="md:buttons hover:cursor-pointer border-b-4 border-s-white block py-3 px-4 w-full md:bg-gray-200 md:hover:bg-gray-300 hover:bg-gray-200 hover:text-black text-md rounded-md transition-colors duration-300"
                        >
                            <i className="fa-solid fa-camera-retro mr-2"></i>Gallery
                        </span>
                    </li>
                    <li>
                        <span 
                            onClick={() => goTo('/Contact')}
                            className="md:buttons hover:cursor-pointer border-b-4 border-s-white block py-3 px-4 md:bg-gray-200 md:hover:bg-gray-300 hover:bg-gray-200 hover:text-black text-md rounded-md transition-colors duration-300"
                        >
                            <i className="fas fa-envelope mr-2"></i> Contact Us
                        </span>
                    </li>
                </ul>

                <button 
                    onClick={() => displaySideBar(prev => !prev)} 
                    className={` hover:cursor-pointer md:hidden ${isSideBar ? 'rotate-90' : ''} transition-transform duration-300`}
                >
                    <i className="fa-solid fa-bars text-2xl"></i>
                </button>
            </nav>
        </>
    )
}

export default Navbar