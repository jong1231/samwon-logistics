import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import CeoMessage from './pages/company/CeoMessage'
import History from './pages/company/History'
import Subsidiaries from './pages/company/Subsidiaries'
import Equipment from './pages/company/Equipment'
import Location from './pages/company/Location'
import Corporate from './pages/business/Corporate'
import Distribution from './pages/business/Distribution'
import Brokerage from './pages/business/Brokerage'
import Warehouse from './pages/business/Warehouse'
import Recruitment from './pages/Recruitment'
import Contact from './pages/Contact'
import Admin from './pages/Admin'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsOfService from './pages/TermsOfService'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />

        {/* 회사소개 */}
        <Route path="/company/ceo" element={<CeoMessage />} />
        <Route path="/company/history" element={<History />} />
        <Route path="/company/subsidiaries" element={<Subsidiaries />} />
        <Route path="/company/equipment" element={<Equipment />} />
        <Route path="/company/location" element={<Location />} />

        {/* 사업영역 */}
        <Route path="/business/corporate" element={<Corporate />} />
        <Route path="/business/distribution" element={<Distribution />} />
        <Route path="/business/brokerage" element={<Brokerage />} />
        <Route path="/business/warehouse" element={<Warehouse />} />

        {/* 채용정보 */}
        <Route path="/recruitment" element={<Recruitment />} />

        {/* 고객센터 */}
        <Route path="/contact" element={<Contact />} />

        {/* 관리자 */}
        <Route path="/admin" element={<Admin />} />

        {/* 푸터 하단 링크 */}
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfService />} />
      </Route>
    </Routes>
  )
}
