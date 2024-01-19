import {ReactComponent as GoToIcon} from '../../assets/icons/go_to_page.svg'

const WidgetTypeBox = ({ widgetType, onNavigate }) => {

  return (
    <div className="widget_type_box">
        <h3>
            {widgetType}
        </h3>
        {onNavigate &&
          <GoToIcon className="widget_icon" onClick={onNavigate}/>
        }
    </div> 
  )
}

export default WidgetTypeBox;