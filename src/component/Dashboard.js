import React from 'react'
import Cards from './Cards'
function Dashboard() {
    let data = [{
        title : "Earnings (Monthly)",
        value : "$40,000",
        icon : "fa-calendar",
        color : "primary",
        progress : false
      },
      {
       title : "Earnings (Annual))",
        value : "$215,000",
        icon : "fa-dollar-sign",
        color : "success",
        progress: false
      },
      {
        title : "Tasks",
         value : "50%",
         icon : "fa-clipboard-list",
        color : "info",
        progress: true
       },
       {
        title : "Pending Requests",
         value : "18",
         icon : "fa-comments",
        color : "warning",
        progress : false
       }
   ]
  
    return (
   <>
  

     {/* <!-- Content Wrapper --> */}
        <div id="content-wrapper" className="d-flex flex-column">

            {/* <!-- Main Content --> */}
            <div id="content">

                {/* <!-- Topbar --> */}
                <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

                    {/* <!-- Sidebar Toggle (Topbar) --> */}
                    <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
                        <i className="fa fa-bars"></i>
                    </button>

                    </nav>
                {/* <!-- End of Topbar --> */}

                {/* <!-- Begin Page Content --> */}
                <div className="container-fluid">

                    {/* <!-- Page Heading --> */}
                    <div className="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
                        <a href="javascript(void)" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                                className="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
                    </div>

                    {/* <!-- Content Row --> */}
                    <div className="row">
                         {
                            data.map((e,i)=>{
                                return <Cards key={i}
                                input={e} />
                            })
                         }
                    </div>

                    </div>
                    </div>
                    </div>


   </>
  )
}

export default Dashboard