// Functional component
// import { isContentEditable } from '@testing-library/user-event/dist/utils';
import React from 'react'
//import { FaHeart } from "react-icons/fa";
// import {print} from '../components/content/Content'
import image from './Images/soft1.jpg'
import './Content.css'
export default function Content() {
  // print();
  return (
    <div className='BackgroundConatiner'>
      <div className='BackgroundLayer'>
          <div className='LeftPanel'>
            <div className='FirstLayer'>
              <div className='Profile'>
                <span className='UserIcon'><i class="fa-solid fa-circle-user"></i></span>
              </div>
              <div className='Profile-Data'>
               <li className='DataName'>NAME<span className='dot'>:</span></li>
               <li className='DataName'>EMP-ID<span className='dot'>:</span></li>
               <li className='DataName'>ROLE<span className='dot'>:</span></li>
              </div>
            </div>
            <div className='SecondLayer'>
              <li className='Left-Menu'><span className='font DashBoard'><i class="fa-solid fa-grip Fonts"></i>DashBoard</span> <div className='Notfication'><span>7</span></div></li>
              <li className='Left-Menu'><span className='font Class'><i class="fa-solid fa-folder-minus Fonts"></i>Class</span></li>
              <li className='Left-Menu'><span className='font Community'><i class="fa-solid fa-users Fonts"></i>Community</span><div className='Notfication'><span>19</span></div></li>
              <li className='Left-Menu'><span className='font Analytics'><i class="fa-solid fa-chart-line Fonts"></i>Analytics</span><div className='Notfication'><span>12</span></div></li>
              <li className='Left-Menu'><span className='font Settings'><i class="fa-solid fa-gear Fonts"></i>Settings</span></li>
            </div>
            <div className='ThirdLayer'>
              <div className='left-footer1'>
                <div className='footer-child shadow'>
                  <div className='F-start'><li className='Workspace-Menu'>Workspace</li></div>
                  <div className='F-end'><div className='Notfication'><span className='end-notification Not-Icon'><i class="fa-solid fa-plus"></i></span></div></div>
                </div>
                <div className='footer-child'>
                <div className='F-start'><li className='Workspace-Menu'>UI/UX Design</li></div>
                  <div className='F-end'><div className='Notfication'><span className='end-notification'>9</span></div></div>
                </div>
                <div className='footer-child'>
                <div className='F-start'><li className='Workspace-Menu'>Information System</li></div>
                  <div className='F-end'><div className='Notfication'><span className='end-notification'>3</span></div></div>
                </div>
                <div className='footer-child'>
                <div className='F-start'><li className='Workspace-Menu'>Software Engineering</li></div>
                  <div className='F-end'><div className='Notfication'><span className='end-notification'>6</span></div></div>
                </div>
              </div>
              <div className='left-footer2'><div className='Logout-Conatainer'><div className='Logout-Icon'><i class="fa-solid fa-arrow-right-from-bracket"></i></div><div className='Logout-Text'><span>Log Out</span></div></div></div>
              </div> 
          </div>
          <div className='RightPanel'>
            <div className='First-RightPanel'>
              <div className='FRP-Top'>
               <div className='FRP-TopChild UI-Text'> UI/UX DESIGN </div>
               <div className='FRP-TopChild SearchContainer'>
                <div className='SearchBox'><span className='SearchIcon'><i class="fa-solid fa-magnifying-glass"></i></span><input className='SearchBar' placeholder='Type Anything for Search'></input></div>
                <div className='Notifi-Bell'><span className='BellIcon'><i class="fa-regular fa-bell"></i></span><li className='notDot'></li></div>
               </div>
              </div>
              <div className='FRP-Bottom'>
               <div className='FRP-BottomChild1'>
                <div className='Nav-Menu'>
                  <div className='FilDayIcon icons'><i class="fa-regular fa-calendar"></i></div>
                  <div className='DayFilText'>Today</div>
                  <div className='DownArrow icons'><i class="fa-solid fa-chevron-down"></i></div>
                </div>
                <div className='Nav-Menu'>
                <div className='FilDayIcon icons'><i class="fa-solid fa-arrow-up-short-wide"></i></div>
                <div className='DayFilText'>Filter</div>
                <div className='DownArrow icons'><i class="fa-solid fa-chevron-down"></i></div>
                </div>
                <div className='NavTask'>
                  <div className='NavTaskLayer'>
                  <div className='AddTaskIcon'><i class="fa-solid fa-plus"></i></div>
                  <div className='AddTaskText'>Add Task</div>
                  </div>
                </div>
               </div>
               <div className='FRP-BottomChild2'>
                <div className='DateForUpdate'>
                  <span>Date : 07.07.1939</span>
                  <li><span>Update 7 mins ago</span></li>
                </div>
               </div>
              </div> 
            </div>
            <div className='Second-RightPanel'>
              <div className='RightPanelLIst'>
                <div className='WorkingData'>
                  <div className='workingHead'>
                    <div className='Head'><div className='HeaderLevel'><li className='worklevel1'></li><span className='HeaderText'>To Do</span></div></div>
                  </div>
                  <div className='WorkTable'>
                    <div className='WorkItemsSplit'></div>
                    <div className='WorkItems'>
                    <div className='firstWork'>
                        <div className='WorkType'>PROJECT NAME</div>
                        <div className='WorkIcon'><i class="fa-regular fa-comment-dots"></i></div>
                      </div>
                      <div className='SecondWork'>
                        <div className='WorkContent'>
                        <div className='FirstContetnt'>
                          <div className='ContentChild TaskIcon'><i class="fa-brands fa-font-awesome"></i></div>
                          <div className='ContentChild TaskId'>P-ID:ZP-8204</div>
                          </div>
                          <div className='SecondContetnt'>
                            <p className='Assigners'>Work Assigners</p>
                            <div className='ProfileHead'>
                            <div className='WorkProfile WP1'><i class="fa-regular fa-circle-user"></i></div>
                            <div className='WorkProfile WP2'><i class="fa-regular fa-circle-user"></i></div>
                            <div className='WorkProfile WP3'><i class="fa-regular fa-circle-user"></i></div>
                            <div className='WorkProfilePlus'><i class="fa-solid fa-plus"></i></div>
                            </div>
                          </div>
                          <div className='ThirdContetnt'>
                            <div className='workingProcess red'>0%</div>
                          </div>
                        </div>
                      </div>
                      <div className='ThirdWork'>
                      <div className='ProjectLink'> PROJECT LINK</div>
                      <div className='ProjectLinkIcon'><i class="fa-solid fa-link"></i></div>
                      </div>
                    </div>
                    <div className='WorkItems'>
                    <div className='firstWork'>
                        <div className='WorkType'>PROJECT NAME</div>
                        <div className='WorkIcon'><i class="fa-regular fa-comment-dots"></i></div>
                      </div>
                      <div className='SecondWork'>
                        <div className='WorkContent'>
                        <div className='FirstContetnt'>
                          <div className='ContentChild TaskIcon Ri'><i class="fa-solid fa-bug"></i></div>
                          <div className='ContentChild TaskId'>P-ID:ZP-8204</div>
                          </div>
                          <div className='SecondContetnt'>
                            <p className='Assigners'>Work Assigners</p>
                            <div className='ProfileHead'>
                            <div className='WorkProfile WP1'><i class="fa-regular fa-circle-user"></i></div>
                            <div className='WorkProfile WP2'><i class="fa-regular fa-circle-user"></i></div>
                            <div className='WorkProfile WP3'><i class="fa-regular fa-circle-user"></i></div>
                            <div className='WorkProfilePlus'><i class="fa-solid fa-plus"></i></div>
                            </div>
                          </div>
                          <div className='ThirdContetnt'>
                            <div className='workingProcess red'>0%</div>
                          </div>
                        </div>
                      </div>
                      <div className='ThirdWork'>
                      <div className='ProjectLink'> PROJECT LINK</div>
                      <div className='ProjectLinkIcon'><i class="fa-solid fa-link"></i></div>
                      </div>
                    </div>
                    <div className='WorkItems'>
                    <div className='firstWork'>
                        <div className='WorkType'>PROJECT NAME</div>
                        <div className='WorkIcon'><i class="fa-regular fa-comment-dots"></i></div>
                      </div>
                      <div className='SecondWork'>
                        <div className='WorkContent'>
                        <div className='FirstContetnt'>
                          <div className='ContentChild TaskIcon Bi'><i class="fa-regular fa-file-lines"></i></div>
                          <div className='ContentChild TaskId'>P-ID:ZP-8204</div>
                          </div>
                          <div className='SecondContetnt'>
                            <p className='Assigners'>Work Assigners</p>
                            <div className='ProfileHead'>
                            <div className='WorkProfile WP1'><i class="fa-regular fa-circle-user"></i></div>
                            <div className='WorkProfile WP2'><i class="fa-regular fa-circle-user"></i></div>
                            <div className='WorkProfile WP3'><i class="fa-regular fa-circle-user"></i></div>
                            <div className='WorkProfilePlus'><i class="fa-solid fa-plus"></i></div>
                            </div>
                          </div>
                          <div className='ThirdContetnt'>
                            <div className='workingProcess red'>0%</div>
                          </div>
                        </div>
                      </div>
                      <div className='ThirdWork'>
                      <div className='ProjectLink'> PROJECT LINK</div>
                      <div className='ProjectLinkIcon'><i class="fa-solid fa-link"></i></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='WorkingData'>
                 <div className='workingHead'>
                 <div className='Head'><div className='HeaderLevel'><li className='worklevel2'></li><span className='HeaderText'>In Progress</span></div></div>
                </div>
                <div className='WorkTable'>
                <div className='WorkItemsSplit'></div>
                <div className='WorkItems'>
                <div className='firstWork'>
                        <div className='WorkType'>PROJECT NAME</div>
                        <div className='WorkIcon'><i class="fa-regular fa-comment-dots"></i></div>
                      </div>
                      <div className='SecondWork'>
                        <div className='WorkContent'>
                          <div className='FirstContetnt'>
                          <div className='ContentChild TaskIcon Bi'><i class="fa-regular fa-file-lines"></i></div>
                          <div className='ContentChild TaskId'>P-ID:ZP-8204</div>
                          </div>
                          <div className='SecondContetnt'>
                            <p className='Assigners'>Work Assigners</p>
                            <div className='ProfileHead'>
                            <div className='WorkProfile WP1'><i class="fa-regular fa-circle-user"></i></div>
                            <div className='WorkProfile WP2'><i class="fa-regular fa-circle-user"></i></div>
                            <div className='WorkProfile WP3'><i class="fa-regular fa-circle-user"></i></div>
                            <div className='WorkProfilePlus'><i class="fa-solid fa-plus"></i></div>
                            </div>
                          </div>
                          <div className='ThirdContetnt'>
                            <div className='workingProcess blue'>77%
                            <div className='Percentage1'></div></div>
                          </div>
                        </div>
                      </div>
                      <div className='ThirdWork'>
                      <div className='ProjectLink'> PROJECT LINK</div>
                      <div className='ProjectLinkIcon'><i class="fa-solid fa-link"></i></div>
                      </div>
                </div>
                <div className='WorkItems'>
                <div className='firstWork'>
                        <div className='WorkType'>PROJECT NAME</div>
                        <div className='WorkIcon'><i class="fa-regular fa-comment-dots"></i></div>
                      </div>
                      <div className='SecondWork'>
                        <div className='WorkContent'>
                        <div className='FirstContetnt'>
                          <div className='ContentChild TaskIcon'><i class="fa-brands fa-font-awesome"></i></div>
                          <div className='ContentChild TaskId'>P-ID:ZP-8204</div>
                          </div>
                          <div className='SecondContetnt'>
                            <p className='Assigners'>Work Assigners</p>
                            <div className='ProfileHead'>
                            <div className='WorkProfile WP1'><i class="fa-regular fa-circle-user"></i></div>
                            <div className='WorkProfile WP2'><i class="fa-regular fa-circle-user"></i></div>
                            <div className='WorkProfile WP3'><i class="fa-regular fa-circle-user"></i></div>
                            <div className='WorkProfilePlus'><i class="fa-solid fa-plus"></i></div>
                            </div>
                          </div>
                          <div className='ThirdContetnt'>
                            <div className='workingProcess blue'>19%
                            <div className='Percentage2'></div></div>
                          </div>
                        </div>
                      </div>
                      <div className='ThirdWork'>
                      <div className='ProjectLink'> PROJECT LINK</div>
                      <div className='ProjectLinkIcon'><i class="fa-solid fa-link"></i></div>
                      </div>
                </div>
                <div className='WorkItems'>
                <div className='firstWork'>
                        <div className='WorkType'>PROJECT NAME</div>
                        <div className='WorkIcon'><i class="fa-regular fa-comment-dots"></i></div>
                      </div>
                      <div className='SecondWork'>
                        <div className='WorkContent'>
                        <div className='FirstContetnt'>
                          <div className='ContentChild TaskIcon Ri'><i class="fa-solid fa-bug"></i></div>
                          <div className='ContentChild TaskId'>P-ID:ZP-8204</div>
                          </div>
                          <div className='SecondContetnt'>
                            <p className='Assigners'>Work Assigners</p>
                            <div className='ProfileHead'>
                            <div className='WorkProfile WP1'><i class="fa-regular fa-circle-user"></i></div>
                            <div className='WorkProfile WP2'><i class="fa-regular fa-circle-user"></i></div>
                            <div className='WorkProfile WP3'><i class="fa-regular fa-circle-user"></i></div>
                            <div className='WorkProfilePlus'><i class="fa-solid fa-plus"></i></div>
                            </div>
                          </div>
                          <div className='ThirdContetnt'>
                            <div className='workingProcess blue'>54%
                            <div className='Percentage3'></div></div>
                          </div>
                        </div>
                      </div>
                      <div className='ThirdWork'>
                      <div className='ProjectLink'> PROJECT LINK</div>
                      <div className='ProjectLinkIcon'><i class="fa-solid fa-link"></i></div>
                      </div>
                </div>
                </div>
                </div>
                <div className='WorkingData'>
                 <div className='workingHead'>
                 <div className='Head'><div className='HeaderLevel'><li className='worklevel3'></li><span className='HeaderText'>Completed</span></div></div>
                </div>
                <div className='WorkTable endTable'>
                <div className='WorkItemsSplit'></div>
                <div className='WorkItems'>
                <div className='firstWork'>
                        <div className='WorkType'>PROJECT NAME</div>
                        <div className='WorkIcon'><i class="fa-regular fa-comment-dots"></i></div>
                      </div>
                      <div className='SecondWork'>
                        <div className='WorkContent'>
                        <div className='FirstContetnt'>
                          <div className='ContentChild TaskIcon Ri'><i class="fa-solid fa-bug"></i></div>
                          <div className='ContentChild TaskId'>P-ID:ZP-8204</div>
                          </div>
                          <div className='SecondContetnt'>
                            <p className='Assigners'>Work Assigners</p>
                            <div className='ProfileHead'>
                            <div className='WorkProfile WP1'><i class="fa-regular fa-circle-user"></i></div>
                            <div className='WorkProfile WP2'><i class="fa-regular fa-circle-user"></i></div>
                            <div className='WorkProfile WP3'><i class="fa-regular fa-circle-user"></i></div>
                            <div className='WorkProfilePlus'><i class="fa-solid fa-plus"></i></div>
                            </div>
                          </div>
                          <div className='ThirdContetnt'>
                            <div className='workingProcess green'>100%</div>
                          </div>
                        </div>
                      </div>
                      <div className='ThirdWork'>
                      <div className='ProjectLink'> PROJECT LINK</div>
                      <div className='ProjectLinkIcon'><i class="fa-solid fa-link"></i></div>
                      </div>
                </div>
                <div className='WorkItems'>
                <div className='firstWork'>
                        <div className='WorkType'>PROJECT NAME</div>
                        <div className='WorkIcon'><i class="fa-regular fa-comment-dots"></i></div>
                      </div>
                      <div className='SecondWork'>
                        <div className='WorkContent'>
                        <div className='FirstContetnt'>
                          <div className='ContentChild TaskIcon Bi'><i class="fa-regular fa-file-lines"></i></div>
                          <div className='ContentChild TaskId'>P-ID:ZP-8204</div>
                          </div>
                          <div className='SecondContetnt'>
                            <p className='Assigners'>Work Assigners</p>
                            <div className='ProfileHead'>
                            <div className='WorkProfile WP1'><i class="fa-regular fa-circle-user"></i></div>
                            <div className='WorkProfile WP2'><i class="fa-regular fa-circle-user"></i></div>
                            <div className='WorkProfile WP3'><i class="fa-regular fa-circle-user"></i></div>
                            <div className='WorkProfilePlus'><i class="fa-solid fa-plus"></i></div>
                            </div>
                          </div>
                          <div className='ThirdContetnt'>
                            <div className='workingProcess green'>100%</div>
                          </div>
                        </div>
                      </div>
                      <div className='ThirdWork'>
                      <div className='ProjectLink'> PROJECT LINK</div>
                      <div className='ProjectLinkIcon'><i class="fa-solid fa-link"></i></div>
                      </div>
                </div>
                <div className='WorkItems'>
                <div className='firstWork'>
                        <div className='WorkType'>PROJECT NAME</div>
                        <div className='WorkIcon'><i class="fa-regular fa-comment-dots"></i></div>
                      </div>
                      <div className='SecondWork'>
                        <div className='WorkContent'>
                        <div className='FirstContetnt'>
                          <div className='ContentChild TaskIcon'><i class="fa-brands fa-font-awesome"></i></div>
                          <div className='ContentChild TaskId'>P-ID:ZP-8204</div>
                          </div>
                          <div className='SecondContetnt'>
                            <p className='Assigners'>Work Assigners</p>
                            <div className='ProfileHead'>
                            <div className='WorkProfile WP1'><i class="fa-regular fa-circle-user"></i></div>
                            <div className='WorkProfile WP2'><i class="fa-regular fa-circle-user"></i></div>
                            <div className='WorkProfile WP3'><i class="fa-regular fa-circle-user"></i></div>
                            <div className='WorkProfilePlus'><i class="fa-solid fa-plus"></i></div>
                            </div>
                          </div>
                          <div className='ThirdContetnt'>
                            <div className='workingProcess green'> 100%</div>
                          </div>
                        </div>
                      </div>
                      <div className='ThirdWork'>
                      <div className='ProjectLink'> PROJECT LINK</div>
                      <div className='ProjectLinkIcon'><i class="fa-solid fa-link"></i></div>
                      </div>
                </div>
                </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
    
  )
}
