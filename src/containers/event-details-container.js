// This container is a sort of middleware between the React page and the Redux data store

import { connect } from 'react-redux';
import { setSidebarMode, setCurrentEvent, setPageTitlePrefix } from '../data/actions';
import EventDetailsPage from '../pages/details/event-details-page';

// This function passes values/objects from the Redux state to the React component as props
const mapStateToProps = state => {
    return {
        events: state.events.events,
    }
};

// This function passes functions from /srcs/data/actions.jsx to the React component as props
const mapDispatchToProps = dispatch => {
    return {
        setSidebarMode: mode => {
            dispatch(setSidebarMode(mode));
        },
        editEvent: (linkSuffix) => {
            dispatch(push('/edit/'+linkSuffix));
        },
        setCurrentEvent: (eventId) => {
            dispatch(setCurrentEvent(eventId));
        },
        setPageTitlePrefix: (title) => {
            dispatch(setPageTitlePrefix(title));
        },
    }
};

// Connect props to Redux state and actions
const ViewEventContainer = connect(mapStateToProps, mapDispatchToProps)(EventDetailsPage);

export default ViewEventContainer;