// PageHeader.js
import React from 'react';
import Breadcrumb from './BreadCrumb';
const PageHeader = ({ title }) => {
    const createBreadcrumbItems = () => {
        const pathArray = window.location.pathname.split('/').filter((path) => path);
        const items = pathArray.map((path, index) => {
          const link = '/' + pathArray.slice(0, index + 1).join('/');
          return { title: decodeURIComponent(path).toUpperCase().replace('/',''), link };
        });
    
        // Add Home as the first item
        items.unshift({ title: 'Home', link: '/' });
    
        
    
        return items;
      };
    
      const breadcrumbItems = createBreadcrumbItems();

      console.log(breadcrumbItems)
    
      return (
        <>
    <section className="in-banner">
      <div className="inheading">
        <h1>{title}</h1>
      </div>
    </section>
    <Breadcrumb items={breadcrumbItems} />
    </>
  );
};

export default PageHeader;
