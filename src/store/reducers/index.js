

const initialState = {
    count: 0,
    isAuthenticated: false,
    sidebarExpanded: false,
    user:{},
    store:{store_logo:'1722240569logo.png',store_title:'रघुवीर सिंह राजकीय महाविद्यालय, ललितपुर=Raghuveer Singh Government Degree College, Lalitpur'},
    sliders:['https://campus.acetians.in/custom/image/lalitpur-logo.png'],
    notices:[],
    gallery_images:[],
    courses:[],
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN':
            return { ...state, isAuthenticated: true };
        case 'EXPAND':
            return { ...state, sidebarExpanded: true };
        case 'COMPRESS':
            return { ...state, sidebarExpanded: false };
        case 'SET_STORE_DATA':
            return {...state,store:action.payload};
        case 'SET_STORE_SLIDERS':
                return {...state,sliders:action.payload};
        case 'SET_NOTICES':
                return {...state,notices:action.payload};
        case 'SET_GALLERY_IMAGES':
                return {...state,gallery_images:action.payload};
        case 'SET_COURSE_DATA':
                return {...state,courses:action.payload};
        default: 
            return state;
    }
};

export default rootReducer;
