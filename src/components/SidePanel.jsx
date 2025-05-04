import React, { useState } from 'react';
import "../styles/SidePanel.css";

import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";

const SidePanel = () => {
  const [isOpen, setIsOpen] = useState({
    idealFor: false,
    occasion: false,
    work: false,
    fabric: false,
    segment: false,
    suitableFor: false,
    rawMaterials: false,
    pattern: false
  });

  const handleToggle = (filterName) => {
    setIsOpen((prev) => ({
      ...prev, [filterName]: !prev[filterName]
    }));
  }

  return (
    <>
      <div className='sidePanel'>        
        <label htmlFor="customizable" className='sidePanel__headers'>
          <input type="checkbox" id="customizable" /> CUSTOMIZABLE
        </label>

        <hr className='sidePanel__dividers' />

        <div>
          <div className='sidePanel__options sidePanel__headers' onClick={() => handleToggle("idealFor")}>
            <span>IDEAL FOR</span>
            {isOpen.idealFor ? <MdKeyboardArrowDown className="sidePanel__downArrow" /> : <MdKeyboardArrowRight className="sidePanel__rightArrow" />}
          </div>
          
          {isOpen.idealFor && <p>All</p>}
        </div>

        <hr className='sidePanel__dividers' />

        <div>
          <div className='sidePanel__options sidePanel__headers' onClick={() => handleToggle("occasion")}>
            <span>OCCASION</span>
            {isOpen.occasion ? <MdKeyboardArrowDown className="sidePanel__downArrow" /> : <MdKeyboardArrowRight className="sidePanel__rightArrow" />}
          </div>
          
          {isOpen.occasion && <p>All</p>}
        </div>

        <hr className='sidePanel__dividers' />

        <div>
          <div className='sidePanel__options sidePanel__headers' onClick={() => handleToggle("work")}>
            <span>WORK</span>
            {isOpen.work ? <MdKeyboardArrowDown className="sidePanel__downArrow" /> : <MdKeyboardArrowRight className="sidePanel__rightArrow" />}
          </div>
          
          {isOpen.work && <p>All</p>}
        </div>

        <hr className='sidePanel__dividers' />

        <div>
          <div className='sidePanel__options sidePanel__headers' onClick={() => handleToggle("fabric")}>
            <span>FABRIC</span>
            {isOpen.fabric ? <MdKeyboardArrowDown className="sidePanel__downArrow" /> : <MdKeyboardArrowRight className="sidePanel__rightArrow" />}
          </div>
          
          {isOpen.fabric && <p>All</p>}
        </div>

        <hr className='sidePanel__dividers' />

        <div>
          <div className='sidePanel__options sidePanel__headers' onClick={() => handleToggle("segment")}>
            <span>SEGMENT</span>
            {isOpen.segment ? <MdKeyboardArrowDown className="sidePanel__downArrow" /> : <MdKeyboardArrowRight className="sidePanel__rightArrow" />}
          </div>
          
          {isOpen.segment && <p>All</p>}
        </div>

        <hr className='sidePanel__dividers' />

        <div>
          <div className='sidePanel__options sidePanel__headers' onClick={() => handleToggle("suitableFor")}>
            <span>SUITABLE FOR</span>
            {isOpen.suitableFor ? <MdKeyboardArrowDown className="sidePanel__downArrow" /> : <MdKeyboardArrowRight className="sidePanel__rightArrow" />}
          </div>
          
          {isOpen.suitableFor && <p>All</p>}
        </div>

        <hr className='sidePanel__dividers' />

        <div>
          <div className='sidePanel__options sidePanel__headers' onClick={() => handleToggle("rawMaterials")}>
            <span>RAW MATERIALS</span>
            {isOpen.rawMaterials ? <MdKeyboardArrowDown className="sidePanel__downArrow" /> : <MdKeyboardArrowRight className="sidePanel__rightArrow" />}
          </div>
          
          {isOpen.rawMaterials && <p>All</p>}
        </div>

        <hr className='sidePanel__dividers' />

        <div>
          <div className='sidePanel__options sidePanel__headers' onClick={() => handleToggle("pattern")}>
            <span>PATTERN</span>
            {isOpen.pattern ? <MdKeyboardArrowDown className="sidePanel__downArrow" /> : <MdKeyboardArrowRight className="sidePanel__rightArrow" />}
          </div>
          
          {isOpen.pattern && <p>All</p>}
        </div>

        <hr className='sidePanel__dividers' />
      </div>
    </>
  );
}

export default SidePanel;