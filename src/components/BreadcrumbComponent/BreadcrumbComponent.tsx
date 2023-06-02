import { useTranslation } from 'react-i18next'
import { useLocation } from 'react-router-dom'

import {
    BreadcrumbContainer,
    BreadcrumbItem,
    BreadcrumbLink,
} from './BreadcrumbComponent.styled'

export const BreadcrumbComponent = ({ title }: { title?: string }) => {
    const { t } = useTranslation(['components'])
    const location = useLocation()
    let currentLink = ''

    const crumbs = location.pathname
        .split('/')
        .filter((crumb) => crumb !== '')
        .map((crumb) => {
            currentLink += `/${crumb}`

            return (
                <BreadcrumbItem key={crumb}>
                    <BreadcrumbLink to={currentLink}>
                        {t('crumb')}
                    </BreadcrumbLink>
                </BreadcrumbItem>
            )
        })

    const homeBreadcrumb = (
        <BreadcrumbItem key='home'>
            <BreadcrumbLink to='/'>{t('Home')}</BreadcrumbLink>
        </BreadcrumbItem>
    )

    return (
        <BreadcrumbContainer>
            {homeBreadcrumb}
            {crumbs.slice(0, 1)}
            <p className='text-orange ml-2'>{title}</p>
        </BreadcrumbContainer>
    )
}
