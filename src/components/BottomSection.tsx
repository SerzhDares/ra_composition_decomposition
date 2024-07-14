// Компонент для отображения нижних разделов сайта, расположенных под баннером (кроме погоды)

import { Props } from './PropsInterface';

interface bottomSectionProps {
    title: string,
    content: Props[]
}

export default function BottomSection({title, content}: bottomSectionProps) {
  return (
    <div className="bottom_section">
        <a href="#" className="titles">{title}</a>
        <div className="bottom_section_content">
            <ul className="bottom_section_content_list">
                {content.map(item => (
                    <li className="bottom_section_content_item" key={item.title}>
                        {item.img  ? <img src={item.img} alt="icon" className="icon bottom_icon"/> : item.img=''}
                        {item.title}
                    </li>
                    )
                )
            }
            </ul>
        </div>
    </div>
  )
}
