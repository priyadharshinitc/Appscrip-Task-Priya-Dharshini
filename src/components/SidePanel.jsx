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
          
          {isOpen.idealFor && (
            <div>
              <p>All</p>
              <div className='sidePanel__extraFilters'>
                <button className='unselectBtn'>Unselect All</button>
                <label htmlFor="men">
                  <input type="checkbox" id="men" /> Men
                </label>
                <label htmlFor="women">
                  <input type="checkbox" id="women" /> Women
                </label>
                <label htmlFor="babyAndKids">
                  <input type="checkbox" id="babyAndKids" /> Baby & Kids
                </label>
              </div>
            </div>
          )}
        </div>

        <hr className='sidePanel__dividers' />

        <div>
          <div className='sidePanel__options sidePanel__headers' onClick={() => handleToggle("occasion")}>
            <span>OCCASION</span>
            {isOpen.occasion ? <MdKeyboardArrowDown className="sidePanel__downArrow" /> : <MdKeyboardArrowRight className="sidePanel__rightArrow" />}
          </div>
          
          {isOpen.occasion && (
            <div>
              <p>All</p>
              <div className='sidePanel__extraFilters'>
                <button className='unselectBtn'>Unselect All</button>
                <label htmlFor="casual">
                  <input type="checkbox" id="casual" /> Casual
                </label>
                <label htmlFor="formal">
                  <input type="checkbox" id="formal" /> Formal
                </label>
                <label htmlFor="party">
                  <input type="checkbox" id="party" /> Party
                </label>
                <label htmlFor="wedding">
                  <input type="checkbox" id="wedding" /> Wedding
                </label>
              </div>
            </div>
          )}
        </div>

        <hr className='sidePanel__dividers' />

        <div>
          <div className='sidePanel__options sidePanel__headers' onClick={() => handleToggle("work")}>
            <span>WORK</span>
            {isOpen.work ? <MdKeyboardArrowDown className="sidePanel__downArrow" /> : <MdKeyboardArrowRight className="sidePanel__rightArrow" />}
          </div>
          
          {isOpen.work && (
            <div>
              <p>All</p>
              <div className='sidePanel__extraFilters'>
                <button className='unselectBtn'>Unselect All</button>
                <label htmlFor="office">
                  <input type="checkbox" id="office" /> Office
                </label>
                <label htmlFor="wfh">
                  <input type="checkbox" id="wfh" /> Work from Home
                </label>
                <label htmlFor="industrial">
                  <input type="checkbox" id="industrial" /> Industrial
                </label>
              </div>
            </div>
          )}
        </div>

        <hr className='sidePanel__dividers' />

        <div>
          <div className='sidePanel__options sidePanel__headers' onClick={() => handleToggle("fabric")}>
            <span>FABRIC</span>
            {isOpen.fabric ? <MdKeyboardArrowDown className="sidePanel__downArrow" /> : <MdKeyboardArrowRight className="sidePanel__rightArrow" />}
          </div>
          
          {isOpen.fabric && (
            <div>
              <p>All</p>
              <div className='sidePanel__extraFilters'>
                <button className='unselectBtn'>Unselect All</button>
                <label htmlFor="cotton">
                  <input type="checkbox" id="cotton" /> Cotton
                </label>
                <label htmlFor="polyster">
                  <input type="checkbox" id="polyster" /> Polyster
                </label>
                <label htmlFor="linen">
                  <input type="checkbox" id="linen" /> Linen
                </label>
                <label htmlFor="denim">
                  <input type="checkbox" id="denim" /> Denim
                </label>
              </div>
            </div>
          )}
        </div>

        <hr className='sidePanel__dividers' />

        <div>
          <div className='sidePanel__options sidePanel__headers' onClick={() => handleToggle("segment")}>
            <span>SEGMENT</span>
            {isOpen.segment ? <MdKeyboardArrowDown className="sidePanel__downArrow" /> : <MdKeyboardArrowRight className="sidePanel__rightArrow" />}
          </div>
          
          {isOpen.segment && (
            <div>
              <p>All</p>
              <div className='sidePanel__extraFilters'>
                <button className='unselectBtn'>Unselect All</button>
                <label htmlFor="premium">
                  <input type="checkbox" id="premium" /> Premium
                </label>
                <label htmlFor="budget">
                  <input type="checkbox" id="budget" /> Budget
                </label>
              </div>
            </div>
          )}
        </div>

        <hr className='sidePanel__dividers' />

        <div>
          <div className='sidePanel__options sidePanel__headers' onClick={() => handleToggle("suitableFor")}>
            <span>SUITABLE FOR</span>
            {isOpen.suitableFor ? <MdKeyboardArrowDown className="sidePanel__downArrow" /> : <MdKeyboardArrowRight className="sidePanel__rightArrow" />}
          </div>
          
          {isOpen.suitableFor && (
            <div>
              <p>All</p>
              <div className='sidePanel__extraFilters'>
                <button className='unselectBtn'>Unselect All</button>
                <label htmlFor="summer">
                  <input type="checkbox" id="summer" /> Summer
                </label>
                <label htmlFor="winter">
                  <input type="checkbox" id="winter" /> Winter
                </label>
                <label htmlFor="rainy">
                  <input type="checkbox" id="rainy" /> Rainy Season
                </label>
                <label htmlFor="allSeasons">
                  <input type="checkbox" id="allSeasons" /> All Seasons
                </label>
              </div>
            </div>
          )}
        </div>

        <hr className='sidePanel__dividers' />

        <div>
          <div className='sidePanel__options sidePanel__headers' onClick={() => handleToggle("rawMaterials")}>
            <span>RAW MATERIALS</span>
            {isOpen.rawMaterials ? <MdKeyboardArrowDown className="sidePanel__downArrow" /> : <MdKeyboardArrowRight className="sidePanel__rightArrow" />}
          </div>
          
          {isOpen.rawMaterials && (
            <div>
              <p>All</p>
              <div className='sidePanel__extraFilters'>
                <button className='unselectBtn'>Unselect All</button>
                <label htmlFor="organicCotton">
                  <input type="checkbox" id="organicCotton" /> Organic Cotton
                </label>
                <label htmlFor="recycledPolyster">
                  <input type="checkbox" id="recycledPolyster" /> Recycled Polyster
                </label>
                <label htmlFor="hemp">
                  <input type="checkbox" id="hemp" /> Hemp
                </label>
              </div>
            </div>
          )}
        </div>

        <hr className='sidePanel__dividers' />

        <div>
          <div className='sidePanel__options sidePanel__headers' onClick={() => handleToggle("pattern")}>
            <span>PATTERN</span>
            {isOpen.pattern ? <MdKeyboardArrowDown className="sidePanel__downArrow" /> : <MdKeyboardArrowRight className="sidePanel__rightArrow" />}
          </div>
          
          {isOpen.pattern && (
            <div>
              <p>All</p>
              <div className='sidePanel__extraFilters'>
                <button className='unselectBtn'>Unselect All</button>
                <label htmlFor="solid">
                  <input type="checkbox" id="solid" /> Solid
                </label>
                <label htmlFor="striped">
                  <input type="checkbox" id="striped" /> Striped
                </label>
                <label htmlFor="checked">
                  <input type="checkbox" id="checked" /> Checked
                </label>
              </div>
            </div>
          )}
        </div>

        <hr className='sidePanel__dividers' />
      </div>
    </>
  );
}

export default SidePanel;