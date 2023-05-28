import { useTranslation } from 'react-i18next'
import { useLocation } from 'react-router-dom'
import { useMemo } from 'react'

import {
    BreadcrumbContainer,
    BreadcrumbItem,
    BreadcrumbLink,
} from './BreadcrumbComponent.styled'

export const BreadcrumbComponent = () => {
    const { t } = useTranslation(['components'])
    const location = useLocation()
    let currentLink = ''

    const decodeURIComponent = useMemo(
        () => (crumb: string) => crumb.split('%20').join(' '),
        [],
    )

    const crumbs = location.pathname
        .split('/')
        .filter((crumb) => crumb !== '')
        .map((crumb, index, array) => {
            currentLink += `/${crumb}`
            const isLastCrumb = index === array.length - 2

            if (!isLastCrumb && !isNaN(Number(crumb))) {
                return null
            }

            const translatedCrumb = t('crumb')

            return (
                <BreadcrumbItem key={crumb}>
                    {isLastCrumb ? (
                        <span className=' text-orange-500 ml-1'>
                            {decodeURIComponent(crumb)}
                        </span>
                    ) : (
                        <BreadcrumbLink to={currentLink}>
                            {translatedCrumb}
                        </BreadcrumbLink>
                    )}
                </BreadcrumbItem>
            )
        })

    const homeBreadcrumb = (
        <BreadcrumbItem key='home'>
            <BreadcrumbLink to='/'>{t('Home')}</BreadcrumbLink>
        </BreadcrumbItem>
    )

    // Get the last crumb (brand name)
    const lastCrumb = crumbs[crumbs.length - 1]
    const updatedLastCrumb = lastCrumb ? (
        <BreadcrumbItem key={lastCrumb.key}>
            {lastCrumb.props.children}
        </BreadcrumbItem>
    ) : null

    return (
        <BreadcrumbContainer>
            {homeBreadcrumb}
            {crumbs.slice(0, -1)} {/* Exclude the last crumb */}
            {updatedLastCrumb}
        </BreadcrumbContainer>
    )
}
