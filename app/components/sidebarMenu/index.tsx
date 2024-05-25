"use client"
import React, { useState } from 'react';
import styles from './index.module.css';

const SideBar = () => {
  const [openMenus, setOpenMenus] = useState({
    pages: false,
    media: false,
    components: false,
    users: false,
    guidelines: false,
    mediaMovies: false
  });


  const toggleMenu = (menu) => {
    setOpenMenus((prevState) => ({
      ...prevState,
      [menu]: !prevState[menu]
    }));
  };


  return (
    <>
    <div className={styles.sidebarcomponent}>
      <div className={styles.listMenu}>
        <div className={styles.pagesMenu} onClick={() => toggleMenu('mediaMovies')}>
          <div className={styles.menus}>
            <img src="/utils/icons/layout.svg" alt="Logo" />
            <h1>Movies</h1>
          </div>
          <div>
            <img src={`/utils/icons/${openMenus.mediaMovies ? 'downarrow' : 'uparrow'}.svg`} alt="Arrow" />
          </div>
        </div>
        {openMenus.mediaMovies && (
           <div className={styles.subMenuContainer}>
           <div className={styles.verticalLine}></div>
           <div className={styles.articleMenu}>
            <div className={styles.menuItem}>All Movies</div>
            <div className={styles.menuItem}>Upload Movie</div>
            </div>
          </div>
        )}

        <div className={styles.pagesMenu} onClick={() => toggleMenu('media')}>
          <div className={styles.menus}>
            <img src="/utils/icons/image.svg" alt="Logo" />
            <h1>Media</h1>
          </div>
          <div>
            <img src={`/utils/icons/${openMenus.media ? 'downarrow' : 'uparrow'}.svg`} alt="Arrow" />
          </div>
        </div>
        {openMenus.media && (
           <div className={styles.subMenuContainer}>
           <div className={styles.verticalLine}></div>
           <div className={styles.articleMenu}>
            <div className={styles.menuItem}>All films</div>
            <div className={styles.menuItem}>All creators cuts</div>
            <div className={styles.menuItem}>All images</div>
            </div>
          </div>
        )}

        <div className={styles.pagesMenu} onClick={() => toggleMenu('pages')}>
          <div className={styles.menus}>
            <img src="/utils/icons/layers.svg" alt="Logo" />
            <h1>Pages</h1>
          </div>
          <div>
            <img src={`/utils/icons/${openMenus.pages ? 'downarrow' : 'uparrow'}.svg`} alt="Arrow" />
          </div>
        </div>
        {openMenus.pages && (
          <div className={styles.subMenuContainer}>
            <div className={styles.verticalLine}></div>
            <div className={styles.articleMenu}>
              <div className={styles.menuItem}>Logged-in pages</div>
              <div className={styles.menuItem}>Public pages</div>
            </div>
          </div>
        )}

        <div className={styles.pagesMenu} onClick={() => toggleMenu('users')}>
          <div className={styles.menus}>
            <img src="/utils/icons/users.svg" alt="Logo" />
            <h1>Users</h1>
          </div>
          <div>
            <img src={`/utils/icons/${openMenus.users ? 'downarrow' : 'uparrow'}.svg`} alt="Arrow" />
          </div>
        </div>
        {openMenus.users && (
           <div className={styles.subMenuContainer}>
           <div className={styles.verticalLine}></div>
           <div className={styles.articleMenu}>
            <div className={styles.menuItem}>All users</div>
            <div className={styles.menuItem}>Referral code</div>
            </div>
          </div>
        )}

        <div className={styles.pagesMenu} onClick={() => toggleMenu('guidelines')}>
          <div className={styles.menus}>
            <img src="/utils/icons/archive.svg" alt="Logo" />
            <h1>Guidelines</h1>
          </div>
          <div>
            <img src={`/utils/icons/${openMenus.guidelines ? 'downarrow' : 'uparrow'}.svg`} alt="Arrow" />
          </div>
        </div>
        {openMenus.guidelines && (
           <div className={styles.subMenuContainer}>
           <div className={styles.verticalLine}></div>
           <div className={styles.articleMenu}>
            <div className={styles.menuItem}>Overall</div>
            <div className={styles.menuItem}>Custom Reports</div>
            </div>
          </div>
        )}

      </div>
    </div>
      <div className={styles.border}></div>
</>
  );
};

export default SideBar;
