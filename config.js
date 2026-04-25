import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const SUPABASE_URL = 'https://drdfuhploozvoltbrhfd.supabase.co'
const SUPABASE_KEY = 'sb_publishable_uN7pNcvubiGTCLM223ggIQ_ggnpXLv9'

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)

// 장비 종류 목록
export const EQUIPMENT_TYPES = ['스카이차', '사다리차']

// 서류 목록
export const DOC_TYPES = [
  '운전면허증',
  '건설기계조종사면허',
  '보험 가입 증명서',
  '통장 사본',
  '사업자등록증',
  '특수형태근로자 교육 이수증'
]

// 상태 한글 변환
export const STATUS_LABEL = {
  pending:   '검토 중',
  approved:  '승인',
  rejected:  '반려',
  open:      '모집 중',
  closed:    '마감',
  selected:  '매칭 확정',
}

// 로컬스토리지 세션 헬퍼
export const session = {
  set: (key, val) => localStorage.setItem(key, JSON.stringify(val)),
  get: (key) => { try { return JSON.parse(localStorage.getItem(key)) } catch { return null } },
  clear: (key) => localStorage.removeItem(key),
}
