import React from 'react';
import { Link } from 'react-router-dom';
import {
  addressIcon,
  calendarIcon,
  dropdownIcon,
  exitIcon,
  financeSettingsIcon,
  indexIcon,
  mapsIcon,
  profileSettingsIcon,
  settingsIcon,
  tablesIcon,
  widgetsIcon,
} from '../../utils/icons';
import './sidebar.scss';

const Sidebar = () => {
  const sidebarNodeRef = React.useRef<HTMLDivElement | null>(null);

  const onParentLinkOpen = () => {
    if (!sidebarNodeRef.current?.classList.contains('sidebar__node--open')) {
      sidebarNodeRef.current?.classList.add('sidebar__node--open');
    } else {
      sidebarNodeRef.current?.classList.remove('sidebar__node--open');
    }
  };

  return (
    <aside className='sidebar'>
      <div className='sidebar__title'>Меню</div>

      <div className='sidebar__wrapper'>
        <Link className='sidebar__link' to='/'>
          {indexIcon} Главная
        </Link>

        <Link className='sidebar__link sidebar__link--active' to='/address'>
          {addressIcon} Поиск адресов
        </Link>

        <Link className='sidebar__link' to='/'>
          {tablesIcon} Таблицы
        </Link>

        <Link className='sidebar__link' to='/'>
          {calendarIcon} Календарь
        </Link>

        <Link className='sidebar__link' to='/'>
          {mapsIcon} Карты
        </Link>

        <Link className='sidebar__link' to='/'>
          {widgetsIcon} Виджеты
        </Link>

        <div className='sidebar__node' ref={sidebarNodeRef}>
          <span className='sidebar__link' onClick={onParentLinkOpen}>
            {settingsIcon} Настройки
            <span className='sidebar__node-icon'>{dropdownIcon}</span>
          </span>

          <div className='sidebar__node-menu'>
            <Link className='sidebar__link' to='/'>
              {profileSettingsIcon} Настройки профиля
            </Link>
            <Link className='sidebar__link' to='/'>
              {financeSettingsIcon} Управление финансами
            </Link>
          </div>
        </div>

        <Link className='sidebar__link' to='/'>
          {exitIcon} Выход
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;
