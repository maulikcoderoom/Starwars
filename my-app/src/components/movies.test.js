import React from 'react';
import {configure,shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Movies from './movies';
configure({adapter:new Adapter()});

describe('<Movies/>',()=>{
    let testData = {
        dataloaded: true,
        films: [{date: "2005-05-19", title: "Revenge of the Sith"},{date: "2002-05-16", title: "Attack of the Clones"},{date: "1977-05-25", title: "A New Hope"}],
        lastFilm :{date:"2005-05-19" ,title:"Revenge of the Sith"}
    }
    it('should disaply 3 items for character Beru',()=>{
        const wrapper = shallow(<Movies films={testData.films} lastFilm={testData.lastFilm} dataloaded={testData.dataloaded} />);
        expect(wrapper.find('li')).toHaveLength(3);
    })
});