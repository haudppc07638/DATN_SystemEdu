import React, { useEffect, useRef, useState } from 'react';
import { Link, usePage } from '@inertiajs/react';
import SidebarLinkGroup from './SidebarLinkGroup';

const index = ({ sidebarOpen, setSidebarOpen }) => {
  const { url } = usePage();
  const trigger = useRef(null);
  const sidebar = useRef(null);

  const storedSidebarExpanded = localStorage.getItem('sidebar-expanded');
  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === 'true'
  );

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  useEffect(() => {
    localStorage.setItem('sidebar-expanded', sidebarExpanded.toString());
    if (sidebarExpanded) {
      document.querySelector('body').classList.add('sidebar-expanded');
    } else {
      document.querySelector('body').classList.remove('sidebar-expanded');
    }
  }, [sidebarExpanded]);

  return (
    <aside
      ref={sidebar}
      className={`absolute left-0 top-0 z-9999 flex h-screen w-72.5 flex-col overflow-y-hidden bg-black duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0 ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      {/* <!-- SIDEBAR HEADER --> */}
      <div className="flex items-center justify-between gap-2 px-6 py-5.5 lg:py-6.5">
        <Link href="/admin" className='flex items-center gap-2'>
          <img src="/storage/logo/logo.png" alt="Logo" className='w-16 bg-white rounded-full p-1'/>
          <span className='text-white text-2xl font-bold'>SysEdu</span>
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
      {/* <!-- SIDEBAR HEADER --> */}

      <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
        {/* <!-- Sidebar Menu --> */}
        <nav className="mt-5 py-4 px-4 lg:mt-9 lg:px-6">
          {/* <!-- Menu Group --> */}
          <div>
            <h3 className="mb-4 ml-4 text-sm font-semibold text-bodydark2">
              MENU
            </h3>

            <ul className="mb-6 flex flex-col gap-1.5">
              {/* <!-- Menu Item Dashboard --> */}
              <li>
                <Link
                  href="/admin/"
                  className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                    url.includes('sinh-vien') && 'bg-graydark dark:bg-meta-4'
                  }`}
                >
                  <i className="fa-solid fa-chart-column"></i>
                  Báo Cáo Thống Kê
                </Link>
              </li>
              {/* <!-- Menu Item Dashboard --> */}

              {/* <!-- Menu Item Đào Tạo --> */}
              <SidebarLinkGroup
                activeCondition={url.includes('dao-tao')}
              >
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <Link
                        href="#"
                        className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                          url.includes('dao-tao') && 'bg-graydark dark:bg-meta-4'
                        }`}
                        onClick={(e) => {
                          e.preventDefault();
                          sidebarExpanded
                            ? handleClick()
                            : setSidebarExpanded(true);
                        }}
                      >
                        <i className="fa-solid fa-graduation-cap"></i>
                        Đào Tạo
                        <i className={`fa-solid fa-chevron-down absolute right-4 ${open ? 'rotate-180' : ''}`}></i>
                      </Link>
                      {/* <!-- Dropdown Menu Start --> */}
                      <div
                        className={`translate transform overflow-hidden ${
                          !open && 'hidden'
                        }`}
                      >
                        <ul className="mt-4 mb-5.5 flex flex-col gap-2.5 pl-6">
                          <li>
                            <Link
                              href="/admin/khoa"
                              className="group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white"
                            >
                              Khoa
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/admin/chuyen-nganh"
                              className="group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white"
                            >
                              Chuyên Ngành
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/admin/mon-hoc"
                              className="group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white"
                            >
                              Môn Học
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/admin/phong-ban"
                              className="group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white"
                            >
                              Phòng Ban
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/admin/phong-hoc"
                              className="group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white"
                            >
                              Phòng Học
                            </Link>
                          </li>
                        </ul>
                      </div>
                      {/* <!-- Dropdown Menu End --> */}
                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup>
              {/* <!-- Menu Item Đào Tạo --> */}

              {/* <!-- Menu Item Thời Gian & Lịch Học --> */}
              <SidebarLinkGroup
                activeCondition={url.includes('thoi-gian-lich-hoc')}
              >
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <Link
                        href="#"
                        className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                          url.includes('thoi-gian-lich-hoc') && 'bg-graydark dark:bg-meta-4'
                        }`}
                        onClick={(e) => {
                          e.preventDefault();
                          sidebarExpanded
                            ? handleClick()
                            : setSidebarExpanded(true);
                        }}
                      >
                        <i className="fa-solid fa-calendar-days"></i>
                        Thời Gian & Lịch Học
                        <i className={`fa-solid fa-chevron-down absolute right-4 ${open ? 'rotate-180' : ''}`}></i>
                      </Link>
                      {/* <!-- Dropdown Menu Start --> */}
                      <div
                        className={`translate transform overflow-hidden ${
                          !open && 'hidden'
                        }`}
                      >
                        <ul className="mt-4 mb-5.5 flex flex-col gap-2.5 pl-6">
                          <li>
                            <Link
                              href="#"
                              className="group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white"
                            >
                              Học Kỳ
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="#"
                              className="group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white"
                            >
                              Ca Học
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="#"
                              className="group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white"
                            >
                              Lịch Học
                            </Link>
                          </li>
                        </ul>
                      </div>
                      {/* <!-- Dropdown Menu End --> */}
                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup>
              {/* <!-- Menu Item Thời Gian & Lịch Học --> */}

              {/* <!-- Menu Item Lớp Chuyên Ngành --> */}
              <li>
                <Link
                  href="#"
                  className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                    url.includes('lop-chuyen-nganh') && 'bg-graydark dark:bg-meta-4'
                  }`}
                >
                 <i className="fa-solid fa-folder-open"></i>
                  Lớp Chuyên Ngành
                </Link>
              </li>

              {/* <!-- Menu Item Lớp Môn --> */}
              <li>
                <Link
                  href="#"
                  className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                    url.includes('lop-mon') && 'bg-graydark dark:bg-meta-4'
                  }`}
                >
                  <i className="fa-regular fa-folder-open"></i>
                  Lớp Môn
                </Link>
              </li>

              {/* <!-- Menu Item Nhân Sự --> */}
              <li>
                <Link
                  href="#"
                  className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                    url.includes('nhan-su') && 'bg-graydark dark:bg-meta-4'
                  }`}
                >
                  <i className="fa-solid fa-user-tie"></i>
                  Nhân Sự
                </Link>
              </li>

              {/* <!-- Menu Item Sinh Viên --> */}
              <li>
                <Link
                  href="#"
                  className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                    url.includes('sinh-vien') && 'bg-graydark dark:bg-meta-4'
                  }`}
                >
                  <i className="fa-solid fa-user-graduate"></i>
                  Sinh Viên
                </Link>
              </li>

              {/* <!-- Menu Item Gửi Thông Báo --> */}
              <li>
                <Link
                  href="#"
                  className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                    url.includes('gui-thong-bao') && 'bg-graydark dark:bg-meta-4'
                  }`}
                >
                  <i className="fa-solid fa-bell"></i>
                  Gửi Thông Báo
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        {/* <!-- Sidebar Menu --> */}
      </div>
    </aside>
  );
};

export default index;