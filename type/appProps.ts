import { store } from '@lib/redux/store'

export type AppProps = Record<string, never>

export type LoaderProps = {
  show: boolean
}

export type reduxStoreType = typeof store
