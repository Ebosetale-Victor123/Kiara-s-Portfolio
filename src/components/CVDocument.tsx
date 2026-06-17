import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
} from '@react-pdf/renderer'
import {
  personal,
  summary,
  skillGroups,
  experience,
  education,
} from '../data/resume'

// Using built-in PDF fonts to avoid network/CORS issues
const C = {
  charcoal: '#1e2535',
  navy: '#0f1117',
  amber: '#D97706',
  amberMid: '#F59E0B',
  amberLight: '#FEF3C7',
  white: '#FFFFFF',
  offWhite: '#F8FAFC',
  lightGray: '#E2E8F0',
  midGray: '#64748B',
  darkText: '#0F172A',
  bodyText: '#1E293B',
  mutedText: '#475569',
  sidebarBg: '#1e2535',
  sidebarText: '#CBD5E1',
  sidebarMuted: 'rgba(203,213,225,0.5)',
  accent: '#F59E0B',
}

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    fontSize: 9,
    fontFamily: 'Helvetica',
    backgroundColor: C.white,
  },

  // ─── Sidebar ───────────────────────────────────────────────
  sidebar: {
    width: '34%',
    backgroundColor: C.sidebarBg,
    padding: '28 18 28 20',
    flexShrink: 0,
    minHeight: '100%',
  },
  sidebarAccentBar: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 4,
    height: '100%',
    backgroundColor: C.amber,
  },
  sidebarName: {
    fontSize: 17,
    fontFamily: 'Helvetica-Bold',
    color: C.white,
    lineHeight: 1.2,
    marginBottom: 3,
  },
  sidebarRole: {
    fontSize: 7.5,
    fontFamily: 'Helvetica-Bold',
    color: C.amber,
    letterSpacing: 0.8,
    textTransform: 'uppercase',
    marginBottom: 4,
  },
  sidebarTagline: {
    fontSize: 7.5,
    color: C.sidebarMuted,
    marginBottom: 18,
    lineHeight: 1.4,
    fontStyle: 'italic',
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255,255,255,0.08)',
    marginVertical: 14,
  },
  sidebarSectionLabel: {
    fontSize: 7,
    fontFamily: 'Helvetica-Bold',
    color: C.amber,
    letterSpacing: 1.2,
    textTransform: 'uppercase',
    marginBottom: 10,
  },
  contactRow: {
    flexDirection: 'row',
    marginBottom: 7,
    alignItems: 'flex-start',
    gap: 6,
  },
  contactLabel: {
    fontSize: 7,
    fontFamily: 'Helvetica-Bold',
    color: C.sidebarMuted,
    textTransform: 'uppercase',
    letterSpacing: 0.4,
    width: 42,
    paddingTop: 0.5,
  },
  contactValue: {
    fontSize: 8,
    color: C.sidebarText,
    flex: 1,
    lineHeight: 1.35,
  },
  skillGroupName: {
    fontSize: 7.5,
    fontFamily: 'Helvetica-Bold',
    color: C.sidebarText,
    marginTop: 9,
    marginBottom: 5,
  },
  skillChipWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 4,
  },
  skillChip: {
    backgroundColor: 'rgba(245,158,11,0.15)',
    borderWidth: 0.75,
    borderColor: 'rgba(245,158,11,0.35)',
    borderRadius: 3,
    paddingHorizontal: 5,
    paddingVertical: 2.5,
    fontSize: 7,
    color: C.sidebarText,
  },
  referenceText: {
    fontSize: 8,
    color: C.sidebarMuted,
    fontStyle: 'italic',
    lineHeight: 1.4,
  },

  // ─── Main column ───────────────────────────────────────────
  main: {
    flex: 1,
    padding: '28 24 28 22',
    backgroundColor: C.white,
  },

  // Section title with amber underline
  sectionTitle: {
    fontSize: 10,
    fontFamily: 'Helvetica-Bold',
    color: C.darkText,
    textTransform: 'uppercase',
    letterSpacing: 1,
    paddingBottom: 5,
    marginBottom: 10,
    borderBottomWidth: 2,
    borderBottomColor: C.amber,
  },

  // Summary
  summaryText: {
    fontSize: 8.5,
    color: C.bodyText,
    lineHeight: 1.6,
    marginBottom: 20,
  },

  // Experience
  jobBlock: {
    marginBottom: 14,
  },
  jobTopRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 1,
  },
  jobRole: {
    fontSize: 10,
    fontFamily: 'Helvetica-Bold',
    color: C.darkText,
    flex: 1,
  },
  jobPeriod: {
    fontSize: 7.5,
    color: C.midGray,
    fontStyle: 'italic',
  },
  jobCompanyRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
    gap: 5,
  },
  jobCompany: {
    fontSize: 8.5,
    fontFamily: 'Helvetica-Bold',
    color: C.amber,
  },
  bullet: {
    flexDirection: 'row',
    marginBottom: 3.5,
    paddingLeft: 2,
  },
  bulletDot: {
    width: 10,
    fontSize: 8,
    color: C.amber,
    paddingTop: 1,
  },
  bulletText: {
    flex: 1,
    fontSize: 8,
    color: C.mutedText,
    lineHeight: 1.5,
  },

  // Education
  eduBlock: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 10,
    paddingBottom: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: C.lightGray,
  },
  eduLeft: {
    flex: 1,
  },
  eduInstitution: {
    fontSize: 9.5,
    fontFamily: 'Helvetica-Bold',
    color: C.darkText,
    marginBottom: 2,
  },
  eduQualification: {
    fontSize: 8.5,
    color: C.mutedText,
  },
  eduBadge: {
    fontSize: 7,
    fontFamily: 'Helvetica-Bold',
    color: C.amber,
    backgroundColor: 'rgba(245,158,11,0.1)',
    borderWidth: 0.75,
    borderColor: 'rgba(245,158,11,0.3)',
    borderRadius: 3,
    paddingHorizontal: 5,
    paddingVertical: 2,
    marginTop: 3,
    alignSelf: 'flex-start',
  },
  eduPeriod: {
    fontSize: 7.5,
    color: C.midGray,
    fontStyle: 'italic',
    textAlign: 'right',
  },

  sectionGap: { marginBottom: 18 },
})

export default function CVDocument() {
  return (
    <Document
      title={`${personal.name} — CV`}
      author={personal.name}
      subject={personal.headline}
      creator="Kiara Portfolio"
    >
      <Page size="A4" style={styles.page}>

        {/* ══════════════ SIDEBAR ══════════════ */}
        <View style={styles.sidebar}>
          {/* Amber accent bar */}
          <View style={styles.sidebarAccentBar} />

          <Text style={styles.sidebarName}>{personal.name}</Text>
          <Text style={styles.sidebarRole}>{personal.headline}</Text>
          <Text style={styles.sidebarTagline}>{personal.tagline}</Text>

          <View style={styles.divider} />

          {/* Contact */}
          <Text style={styles.sidebarSectionLabel}>Contact</Text>
          <View style={styles.contactRow}>
            <Text style={styles.contactLabel}>Phone</Text>
            <Text style={styles.contactValue}>{personal.phone}</Text>
          </View>
          <View style={styles.contactRow}>
            <Text style={styles.contactLabel}>Email</Text>
            <Text style={styles.contactValue}>{personal.email}</Text>
          </View>
          <View style={styles.contactRow}>
            <Text style={styles.contactLabel}>Location</Text>
            <Text style={styles.contactValue}>{personal.location}</Text>
          </View>

          <View style={styles.divider} />

          {/* Skills */}
          <Text style={styles.sidebarSectionLabel}>Skills</Text>
          {skillGroups.map((group) => (
            <View key={group.category}>
              <Text style={styles.skillGroupName}>{group.category}</Text>
              <View style={styles.skillChipWrap}>
                {group.skills.map((skill) => (
                  <Text key={skill} style={styles.skillChip}>{skill}</Text>
                ))}
              </View>
            </View>
          ))}

          <View style={styles.divider} />

          {/* References */}
          <Text style={styles.sidebarSectionLabel}>References</Text>
          <Text style={styles.referenceText}>
            Available upon request. Please contact via email or phone to obtain referee details.
          </Text>
        </View>

        {/* ══════════════ MAIN COLUMN ══════════════ */}
        <View style={styles.main}>

          {/* Professional Summary */}
          <Text style={styles.sectionTitle}>Professional Summary</Text>
          <Text style={styles.summaryText}>{summary}</Text>

          {/* Experience */}
          <Text style={styles.sectionTitle}>Professional Experience</Text>
          <View style={styles.sectionGap}>
            {experience.map((job) => (
              <View key={`${job.role}-${job.company}`} style={styles.jobBlock}>
                <View style={styles.jobTopRow}>
                  <Text style={styles.jobRole}>{job.role}</Text>
                  <Text style={styles.jobPeriod}>{job.period}</Text>
                </View>
                <View style={styles.jobCompanyRow}>
                  <Text style={styles.jobCompany}>{job.company}</Text>
                </View>
                {job.bullets.map((bullet, bi) => (
                  <View key={bi} style={styles.bullet}>
                    <Text style={styles.bulletDot}>›</Text>
                    <Text style={styles.bulletText}>{bullet}</Text>
                  </View>
                ))}
              </View>
            ))}
          </View>

          {/* Education */}
          <Text style={styles.sectionTitle}>Education</Text>
          {education.map((edu) => (
            <View key={edu.institution} style={styles.eduBlock}>
              <View style={styles.eduLeft}>
                <Text style={styles.eduInstitution}>{edu.institution}</Text>
                <Text style={styles.eduQualification}>{edu.qualification}</Text>
                {edu.status && (
                  <Text style={styles.eduBadge}>{edu.status}</Text>
                )}
              </View>
              <Text style={styles.eduPeriod}>{edu.period}</Text>
            </View>
          ))}

        </View>
      </Page>
    </Document>
  )
}
