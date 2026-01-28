import { useContext } from "react";
import { FooterContext } from '../contexts/footer-context';
import * as RecentActivityStorage from './../services/recent-activity-storage';

function useRecentActivity() {
    const { toggleFooter } = useContext(FooterContext);

    function storeGameRecentActivity(id) {
            !RecentActivityStorage.recentActivityGames.includes(id) ? RecentActivityStorage.recentActivityGames.push(id) : "";
            RecentActivityStorage.store();
            toggleFooter();
        }

    return {
        storeGameRecentActivity,
    }
}

export default useRecentActivity;