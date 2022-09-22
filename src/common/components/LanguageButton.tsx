import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import { useContext, useEffect, useRef, useState } from 'react';
import { LanguageContext } from '../../context/LanguageContext';
import i18n from "i18next";
import { changeLanguageI18n } from './../../i18n/i18n';

const options = ['Dutch', 'English'];

export default function LanguageButton() {

  const { language, setLanguage, changeLanguage } = useContext(LanguageContext);
  console.log(language)

  const [open, setOpen] = useState(false);
  const anchorRef = useRef<HTMLDivElement>(null);
//   const [selectedLanguage, setSelectedLanguage] = useState(1);

  const checkOnRender = () => {

    if (localStorage.language === 'English') {
      changeLanguage('English');
      changeLanguageI18n('en');      
    }
    if (localStorage.language === 'Dutch') {
        changeLanguage('Dutch');
        changeLanguageI18n('nl');    
    }
    if (!('language' in localStorage)) {
        setLanguageInStorage('English');
        changeLanguage('English');
        changeLanguageI18n('en');    
    }
  };

  const setLanguageInStorage = (lang: string) => {
    localStorage.setItem('language', lang);
  };

  useEffect(() => {
    checkOnRender();
  }, []);

  const handleClick = (event: any) => {
    console.log(`You clicked ${options[language]}`);
  };

  const handleMenuItemClick = (
    event: React.MouseEvent<HTMLLIElement, MouseEvent>,
    index: number
  ) => {
    console.log(index);
    if (index === 1) {
        setLanguageInStorage('English');
        setLanguage('English');
    }
    if (index === 0) {
        setLanguageInStorage('Dutch');
        setLanguage('Dutch');
    }
    setOpen(false);
  };

  const handleToggle = () => {
    setOpen(prevOpen => !prevOpen);
  };

  const handleClose = (event: Event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target as HTMLElement)) {
      return;
    }

    setOpen(false);
  };

  return (
    <React.Fragment>
      <ButtonGroup
        sx={{ height: 35, paddingTop: 3 }}
        variant='contained'
        ref={anchorRef}
        aria-label='split button'
      >
        <Button
          sx={{ background: 'lightgrey', color: 'darkblue' }}
          onClick={handleClick}
        >
          {language}
        </Button>
        <Button
          sx={{ background: 'lightgrey' }}
          size='small'
          aria-controls={open ? 'split-button-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-label='select merge strategy'
          aria-haspopup='menu'
          onClick={handleToggle}
        >
          <ArrowDropDownIcon />
        </Button>
      </ButtonGroup>
      <Popper
        sx={{
          zIndex: 1,
        }}
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom',
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList id='split-button-menu' autoFocusItem>
                  {options.map((option, index) => (
                    <MenuItem
                      key={option}
                      disabled={index === 2}
                      selected={index === language}
                      onClick={event => handleMenuItemClick(event, index)}
                    >
                      {option}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </React.Fragment>
  );
}
