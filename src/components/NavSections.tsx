// Компонент для ссылок на различные разделы в верхней части страницы (над поисковой строкой)

import { Props } from './PropsInterface';

interface navSectionsProps {
    navSections: Props[]
}

export default function NavSections({navSections}: navSectionsProps) {
  return (
    <div className="nav_sections">
        <ul className="nav_sections_list">
            {navSections.map(section => (
                <li className="nav_sections_list_item" key={section.title}>
                    <a href={section.link}>{section.title}</a>
                </li>
                )
            )
        }
        </ul>
    </div>
  )
}
