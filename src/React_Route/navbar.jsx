import { NavLink } from "react-router-dom";
import React from 'react';
import "./Sidemenu.css"
import "./sidebar.css"
import "./Widget.css"
const Navbar = () => {
    return (
        <nav className="leftNav">
            <div className="sidebar">
                <div className="widgets">
                <ul>
                    <li id="limanage">Props
                        <div class="drop">
                            <ul>
                                <li><NavLink to="/">PropDestruct</NavLink></li>
                                <li><NavLink to="/TodoBind">TodoBind</NavLink></li>
                                <li><NavLink to="/Example1">PropsExample1</NavLink></li>
                            </ul>
                        </div>
                    </li>
                    <li>EffectHook
                        <div class="drop">
                            <ul>
                                <li><NavLink to="/EffectApi">EffectApi</NavLink></li>
                                <li><NavLink to="/EffectHookBind">EffectHookBind</NavLink></li>
                                <li><NavLink to="/EffectCounter1">EffectCounter1</NavLink></li>
                                <li><NavLink to="/EffectCounter2">EffectCounter2</NavLink></li>
                                <li><NavLink to="/EffectCounter7">EffectCounter7</NavLink></li>
                                <li><NavLink to="/EffectMouseCounter3">EffectMouseCounter3</NavLink></li>
                                <li><NavLink to="/MouseContainer">MouseContainer</NavLink></li>
                                <li><NavLink to="/FetchDataApi">FetchDataApi</NavLink></li>
                            </ul>
                        </div>
                    </li>
                    <li>RefHook
                        <div class="drop">
                            <ul>
                                <li><NavLink to="/RefHook">UseRef</NavLink></li>
                                <li><NavLink to="/RefMultiEleHook">UseRefMultiElement</NavLink></li>
                                <li><NavLink to="/RefExample1">RefExample1</NavLink></li>
                                <li><NavLink to="/RefExample2">RefExample2</NavLink></li>
                                <li><NavLink to="/RefExample3">RefExample3</NavLink></li>
                                <li><NavLink to="/RefExample4">RefExample4</NavLink></li>
                                <li><NavLink to="/RefExample4">RefExample4</NavLink></li>
                            </ul>
                        </div>
                    </li>
                    <li> Custom Hook
                        <div class="drop">
                            <ul>
                                <li><NavLink to="/CustomHook">CustomHook</NavLink></li>
                            </ul>
                        </div>
                    </li>
                    <li>MemoHook
                        <div class="drop">
                            <ul>
                                <li><NavLink to="/UseMemo">UseMemo</NavLink></li>
                                <li><NavLink to="/UseMemoProducts">UseMemoProducts</NavLink></li>

                            </ul>
                        </div>
                    </li>
                    <li>PropDrilling
                        <div class="drop">
                            <ul>
                                <li><NavLink to="/PropDrill">PropDrill</NavLink></li>

                            </ul>
                        </div>
                    </li>
                    <li>QueryParam
                        <div class="drop">
                            <ul>
                                <li><NavLink to="/User/:id/:name">Param</NavLink></li>
                            </ul>
                        </div>
                    </li>
                    <li> ChildtoParent
                        <div class="drop">
                            <ul>
                                <li><NavLink to="/ChildToParent">ChildToParent</NavLink></li>
                            </ul>
                        </div>
                    </li>
                    <li>NestedMenu
                        <div class="drop">
                            <ul>
                                <li><NavLink to="/Home">Home</NavLink></li>
                                <li><NavLink to="/About">About</NavLink></li>
                                <li><NavLink to="/ProductRoute">ProductRoute</NavLink></li>
                            </ul>
                        </div>
                    </li>
                    <li> PassWordGenerator
                        <div class="drop">
                            <ul>
                                <li><NavLink to="/PasswordGenerator">PassWordGenerator</NavLink></li>
                            </ul>
                        </div>
                    </li>
                    <li> CurencyProject
                        <div class="drop">
                            <ul>
                                <li><NavLink to="/CurencyProject">CurencyProject</NavLink></li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
            </div>
        </nav >
    )
}

export default Navbar