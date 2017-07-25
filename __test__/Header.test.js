import React from 'react';
import { shallow, mount, render } from 'enzyme';

import Header from '../src/components/Header';

const mockData = {
  deskTopHeader: {
    showAbout: false,
    showPort: false
  },
  selectAboutDesktop: jest.fn(),
  selectPortDesktop: jest.fn()
};

describe('<Header /> test', function() {  
  let wrapper = shallow(
      <Header 
        deskTopHeader={mockData.deskTopHeader}
        selectAboutDesktop={mockData.selectAboutDesktop}
        selectPortDesktop={mockData.selectPortDesktop}
      />
    );
  
  const event = {
    preventDefault: jest.fn()
  };
  
  it('should render an `.header`', function() {
    expect(wrapper.find('.header').hasClass('hdWrap')).toBe(false);
  });

  it('should receive props', function() {
    expect(wrapper.instance().props.deskTopHeader).toEqual({
      showAbout: false,
      showPort: false
    });
    expect(typeof wrapper.instance().props.selectAboutDesktop).toBe('function');
    expect(typeof wrapper.instance().props.selectPortDesktop).toBe('function');
  });

  describe('selectedAbout method:', function () {
    describe('when deskTopHeader.showPort is false', function() {
      beforeAll(function() {
        wrapper.instance().props.deskTopHeader.showPort = false;
        wrapper.instance().selectedAbout(event);
      });

      it('should call selectAboutDesktop', function() {
        expect(event.preventDefault).toHaveBeenCalled();
        expect(wrapper.instance().props.selectAboutDesktop).toHaveBeenCalled();
      });

      afterAll(function() {
        wrapper.instance().props.selectAboutDesktop.mockReset();
        event.preventDefault.mockReset();
      });
    });

    describe('when deskTopHeader.showPort is true', function() {
      beforeAll(function() {
        wrapper.instance().props.deskTopHeader.showPort = true;
        wrapper.instance().selectedAbout(event);
      });

      it('should call selectAboutDesktop', function() {
        expect(event.preventDefault).toHaveBeenCalled();
        expect(wrapper.instance().props.selectAboutDesktop).not.toHaveBeenCalled();
        expect(wrapper.instance().props.selectPortDesktop).toHaveBeenCalled();
      });
      
      afterAll(function() {
        wrapper.instance().props.selectAboutDesktop.mockReset();
        event.preventDefault.mockReset();
      });
    });
  });

  describe('selectedPort method:', function () {
    describe('when deskTopHeader.showAbout is false', function() {
      beforeAll(function() {
        wrapper.instance().props.deskTopHeader.showAbout = false;
        wrapper.instance().selectedPort(event);
      });

      it('should call selectAboutDesktop', function() {
        expect(event.preventDefault).toHaveBeenCalled();
        expect(wrapper.instance().props.selectPortDesktop).toHaveBeenCalled();
      });

      afterAll(function() {
        wrapper.instance().props.selectAboutDesktop.mockReset();
        event.preventDefault.mockReset();
      });
    });

    describe('when deskTopHeader.showAbout is true', function() {
      beforeAll(function() {
        wrapper.instance().props.deskTopHeader.showAbout = true;
        wrapper.instance().selectedPort(event);
      });

      it('should call selectAboutDesktop', function() {
        expect(event.preventDefault).toHaveBeenCalled();
        expect(wrapper.instance().props.selectAboutDesktop).toHaveBeenCalled();
      });
      
      afterAll(function() {
        wrapper.instance().props.selectAboutDesktop.mockReset();
        event.preventDefault.mockReset();
      });
    });
  });
});
