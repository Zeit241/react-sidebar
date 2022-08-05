import React, {useState} from 'react';
import Page from "./page";
import Logo from './common/icons/logo.svg'
import Home from './common/icons/home.svg'
import Links from './common/icons/links.svg'
import Stats from './common/icons/stats.svg'
import Pay from './common/icons/payment.svg'
import Referals from './common/icons/referals.svg'
import Utils from './common/icons/utils.svg'
import Settings from './common/icons/settings.svg'
import Info from './common/icons/info.svg'
import CloseBtn from './common/icons/arrow-left.svg'

function Outlet() {
    const [menuOpen, setMenuOpen] = useState()
    return (
        <div className={"flex w-screen h-screen"}>
            <div className="min-w-[280px] h-screen bg-[#121415] flex flex-col">
                <div className={"flex items-center m-5 "}>
                    <img src={Logo}/>
                    <h1 className={"uppercase text-white text-xl ml-4"}>tor panel</h1>
                    <img src={CloseBtn} className={"mt-1 w-8  justify-end"} alt=""/>
                </div>
                <div className={"h-full flex items-center ml-7 mr-7"}>
                    <ul className={"w-full list-menu"}>
                        <li className="mb-2">
                            <div className="flex p-[8px]  cursor-pointer rounded-[10px] w-full current">
                                <img className={"mr-[14px] ml-2"} src={Home} alt=""/>
                                <span className={"text-lg"}>Панель</span>
                            </div>
                        </li>
                        <li className="mb-2">
                            <div className="flex p-[8px]  cursor-pointer rounded-[10px] w-full">
                                <img className={"mr-[14px]"} src={Links} alt=""/>
                                <span className={"text-lg"}>Ссылки</span>
                            </div>
                        </li>
                        <li className="mb-2">
                            <div className="flex p-[8px]  cursor-pointer rounded-[10px] w-full">
                                <img className={"mr-[14px]"} src={Stats} alt=""/>
                                <span className={"text-lg"}>Статистика</span>
                            </div>
                        </li>
                        <li className="mb-2">
                            <div className="flex p-[8px]  cursor-pointer rounded-[10px] w-full">
                                <img className={"mr-[14px]"} src={Pay} alt=""/>
                                <span className={"text-lg"}>Оплата</span>
                            </div>
                        </li>
                        <li className="mb-2">
                            <div className="flex p-[8px]  cursor-pointer rounded-[10px] w-full">
                                <img className={"mr-[14px]"} src={Referals} alt=""/>
                                <span className={"text-lg"}>Рефералы</span>
                            </div>
                        </li>
                        <li className="mb-2">
                            <div className="flex p-[8px] cursor-pointer rounded-[10px]  w-full">
                                <img className={"mr-[14px]"} src={Utils} alt=""/>
                                <span className={"text-lg"}>Утилиты</span>
                            </div>
                        </li>
                        <li className="mb-2">
                            <div className="flex p-[8px]  cursor-pointer rounded-[10px] w-full">
                                <img className={"mr-[14px]"} src={Settings} alt=""/>
                                <span className={"text-lg"}>Натройки</span>
                            </div>
                        </li>
                        <li className="">
                            <div className="flex p-[8px]  cursor-pointer rounded-[10px] w-full">
                                <img className={"mr-[14px]"} src={Info} alt=""/>
                                <span className={"text-lg"}>Информация</span>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className={"h-[80px] w-full"}></div>
            </div>
            <div className={"flex flex-col w-full"}>
                <div className={"w-full h-[75px] bg-[#121415]"}></div>
                <Page></Page>
            </div>

        </div>
    );
}

export default Outlet;