import React, { useEffect, useRef, useState } from 'react';
import { Link, usePage } from '@inertiajs/react';

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
                  href="teacher"
                  className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                    url.includes('sinh-vien') && 'bg-graydark dark:bg-meta-4'
                  }`}
                >
                  <i className="fa-solid fa-chart-column"></i>
                  Trang Chủ
                </Link>
              </li>
              {/* <!-- Menu Item Dashboard --> */}


              {/* <!-- Menu Item Lớp Chuyên Ngành --> */}
              <li>
                <Link
                  href="#"
                  className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                    url.includes('tra-cuu-sinh-vien') && 'bg-graydark dark:bg-meta-4'
                  }`}
                >
                 <i className="fa-solid fa-folder-open"></i>
                  Tra Cứu Sinh Viên
                </Link>
              </li>

              {/* <!-- Menu Item Lớp Môn --> */}
              <li>
                <Link
                  href="#"
                  className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                    url.includes('lich-day') && 'bg-graydark dark:bg-meta-4'
                  }`}
                >
                  <i className="fa-regular fa-folder-open"></i>
                  Lịch Dạy
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
                  Nhập Điểm Sinh Viên
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