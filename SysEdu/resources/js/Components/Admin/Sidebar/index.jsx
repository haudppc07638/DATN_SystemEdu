import React, { useEffect, useRef, useState } from 'react';
import { Link, usePage } from '@inertiajs/react';
import SidebarLinkGroup from './SidebarLinkGroup';

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const { url } = usePage();
  const trigger = useRef(null);
  const sidebar = useRef(null);

  const storedSidebarExpanded = localStorage.getItem('sidebar-expanded');
  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === 'true'
  );

  const menuItems = [
    {
      title: 'Báo Cáo Thống Kê',
      icon: 'fa-solid fa-chart-column',
      url: "/admin",
      key: 'dashboard'
    },
    {
      title: 'Đào Tạo',
      icon: 'fa-solid fa-graduation-cap',
      subMenu: [
        { title: 'Khoa', url: "/admin/khoa" },
        { title: 'Chuyên Ngành', url: "/admin/chuyen-nganh" },
        { title: 'Môn Học', url: '/admin/mon-hoc' },
        { title: 'Phòng Ban', url: '/admin/phong-ban' },
        { title: 'Phòng Học', url: '/admin/phong-hoc' }
      ],
      key: 'dao-tao'
    },
    {
      title: 'Thời Gian & Lịch Học',
      icon: 'fa-solid fa-calendar-days',
      subMenu: [
        { title: 'Học Kỳ', url: '#' },
        { title: 'Ca Học', url: '#' },
        { title: 'Lịch Học', url: '#' }
      ],
      key: 'thoi-gian-lich-hoc'
    },
    {
      title: 'Lớp Chuyên Ngành',
      icon: 'fa-solid fa-folder-open',
      url: '#',
      key: 'lop-chuyen-nganh'
    },
    {
      title: 'Lớp Môn',
      icon: 'fa-regular fa-folder-open',
      url: '#',
      key: 'lop-mon'
    },
    {
      title: 'Nhân Sự',
      icon: 'fa-solid fa-user-tie',
      url: "/admin/nhan-su",
      key: 'nhan-su'
    },
    {
      title: 'Sinh Viên',
      icon: 'fa-solid fa-user-graduate',
      url: '#',
      key: 'sinh-vien'
    },
    {
      title: 'Gửi Thông Báo',
      icon: 'fa-solid fa-bell',
      url: '#',
      key: 'gui-thong-bao'
    }
  ];

  return (
    <aside
      ref={sidebar}
      className={`absolute left-0 top-0 z-9999 flex h-screen w-72.5 flex-col overflow-y-hidden bg-black duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0 ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      <div className="flex items-center justify-between gap-2 px-6 py-5.5 lg:py-6.5">
        <Link href="admin" className="flex items-center gap-2">
          <img src="/storage/logo/logo.png" alt="Logo" className="w-16 bg-white rounded-full p-1" />
          <span className="text-white text-2xl font-bold">SysEdu</span>
        </Link>
        <button
          ref={trigger}
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-controls="sidebar"
          aria-expanded={sidebarOpen}
          className="block lg:hidden"
        >
          <i className="fa-solid fa-xmark"></i>
        </button>
      </div>

      <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
        <nav className="mt-5 py-4 px-4 lg:mt-9 lg:px-6">
          <ul className="mb-6 flex flex-col gap-1.5">
            {menuItems.map((menuItem, index) => (
              <React.Fragment key={index}>
                {menuItem.subMenu ? (
                  <SidebarLinkGroup activeCondition={url.includes(menuItem.key)}>
                    {(handleClick, open) => (
                      <React.Fragment>
                        <Link
                          href="#"
                          className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                            url.includes(menuItem.key) && 'bg-graydark dark:bg-meta-4'
                          }`}
                          onClick={(e) => {
                            e.preventDefault();
                            handleClick();
                          }}
                        >
                          <i className={menuItem.icon}></i>
                          {menuItem.title}
                          <i className={`fa-solid fa-chevron-down absolute right-4 ${open ? 'rotate-180' : ''}`}></i>
                        </Link>
                        <div className={`translate transform overflow-hidden ${!open && 'hidden'}`}>
                          <ul className="mt-4 mb-5.5 flex flex-col gap-2.5 pl-6">
                            {menuItem.subMenu.map((subItem, subIndex) => (
                              <li key={subIndex}>
                                <Link
                                  href={subItem.url}
                                  className="group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white"
                                >
                                  {subItem.title}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </React.Fragment>
                    )}
                  </SidebarLinkGroup>
                ) : (
                  <li key={menuItem.key}>
                    <Link
                      href={menuItem.url}
                      className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                        url.includes(menuItem.key) && 'bg-graydark dark:bg-meta-4'
                      }`}
                    >
                      <i className={menuItem.icon}></i>
                      {menuItem.title}
                    </Link>
                  </li>
                )}
              </React.Fragment>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
