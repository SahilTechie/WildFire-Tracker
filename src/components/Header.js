import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/fire-alert'

const Header = () => {
    return (
        <header className="header">
            <h1>
                <span className="fire-icon animated-fire">
                    <Icon icon={locationIcon} />
                </span>
                <span className="header-text animated-text">
                    Wildfire Tracker 
                </span>
                <span className="powered-by animated-powered">
                    (Powered By NASA)
                </span>
            </h1>
        </header>
    )
}

export default Header
