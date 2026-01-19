import * as RedditService from '../../../services/reddit-service';
import * as DateUtils from '../../../utils/date-utils';

function PostItem({ name, created, username, image }) {
    return (
        <div className="d-flex flex-column gap-3 align-items-center rounded-5 p-3" style={{backgroundColor: '#3A3A3A'}}>
            <div className="d-flex gap-5" style={{width: '80%'}}>
                <img className="rounded-circle" src={`${image ? image : 'https://img.freepik.com/premium-vector/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-vector-illustration_561158-3407.jpg?semt=ais_hybrid&w=740&q=80'}`} width={'100px'} height={'100px'} />
                <div >
                    <div>{username.slice(3, username.length)}</div>
                    <div>
                        <div>Date: {DateUtils.dateToString(created)[0]}</div>
                        <div>Hour: {DateUtils.dateToString(created)[1]}</div>
                    </div>
                    <a href={RedditService.getRedditPostByUser(username)}><i className="fa fa-reddit fa-lg"></i></a>
                </div>
            </div>
            <div>{name}</div>
        </div>
    );
}

export default PostItem;