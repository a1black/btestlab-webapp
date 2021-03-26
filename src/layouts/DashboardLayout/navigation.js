import AddRecordIcon from '@material-ui/icons/CreateRounded'
import DashboardIcon from '@material-ui/icons/DashboardOutlined'
import JournalIcon from '@material-ui/icons/ListAltRounded'
import PatientCodesIcon from '@material-ui/icons/EnhancedEncryptionOutlined'
import PatientsIcon from '@material-ui/icons/FolderSharedOutlined'
import ReportsIcon from '@material-ui/icons/GridOnOutlined'
import SettingsIcon from '@material-ui/icons/SettingsOutlined'
import StatisticsIcon from '@material-ui/icons/BarChartRounded'
import TestTypesIcon from '@material-ui/icons/InvertColorsRounded'
import UsersIcon from '@material-ui/icons/PeopleAltRounded'

const navigation = [
  [
    {
      href: 'add-record',
      icon: AddRecordIcon,
      label: 'Add Record'
    },
    {
      href: 'workload',
      icon: DashboardIcon,
      label: 'Dashboard'
    },
    {
      href: 'journal',
      icon: JournalIcon,
      label: 'Journal'
    },
    {
      href: 'patients',
      icon: PatientsIcon,
      label: 'Patients'
    }
  ],
  [
    {
      href: 'reports',
      icon: ReportsIcon,
      label: 'Reports'
    },
    {
      href: 'statics',
      icon: StatisticsIcon,
      label: 'Statistics'
    }
  ],
  [
    {
      href: 'test-types',
      icon: TestTypesIcon,
      label: 'Test types'
    },
    {
      href: 'patient-codes',
      icon: PatientCodesIcon,
      label: 'Patient Codes'
    },
    {
      href: 'users',
      icon: UsersIcon,
      label: 'Users'
    }
  ],
  [
    {
      href: 'settings',
      icon: SettingsIcon,
      label: 'Settings'
    }
  ]
]

export default navigation
