/**
 * TODO:
 * Generate the right metadata in this page
 */

import { Metadata } from 'next'
import { redirect } from 'next/navigation'

export async function generateMetadata(): Promise<Metadata> {
    // TODO: similar to /og/static/[chartParams]
    // generate the right metadata for the chart
    // The difference is that here
    // the image URL should be "/og/local/serve/<imgUniqueName>"
    return {}
}
export async function LocalChartRedirectionPage() {
    // TODO: similar to /og/static/[chartParams]
    // redirect user to the chart in context
    redirect('/')
}
