/*import { View, Text } from 'react-native'
import React from 'react'

const Profile = () => {
  return (
    <View>
      <Text>Profile</Text>
    </View>
  )
}

export default Profile*/ 
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';



interface NavButtonProps {
  icon: string;
  label: string;
  active?: boolean;
}


export default function ProfileScreen() {
  const [stats] = useState({
    quizzesTaken: 42,
    correctAnswers: 156,
    totalQuestions: 210,
    averageScore: 74,
    rank: "Gold",
    points: 1250,
  });

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Profil</Text>
        <View style={styles.headerIcons}>
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="notifications-outline" size={24} color="#333" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="settings-outline" size={24} color="#333" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Main content */}
      <ScrollView style={styles.scrollView}>
        {/* Profile card */}
        <View style={styles.profileCard}>
          <View style={styles.coverPhoto} />
          <View style={styles.profileContent}>
            <View style={styles.avatarContainer}>
              <Image
                source={{ uri: 'https://via.placeholder.com/96' }}
                style={styles.avatar}
              />
            </View>
            <View style={styles.profileInfo}>
              <Text style={styles.profileName}>Kullanıcı Adı</Text>
              <Text style={styles.profileEmail}>kullanici@email.com</Text>
            </View>
            <TouchableOpacity style={styles.editButton}>
              <Ionicons name="pencil-outline" size={16} color="#333" />
              <Text style={styles.editButtonText}>Profili Düzenle</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Stats card */}
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Ionicons name="medal" size={20} color="#F59E0B" />
            <Text style={styles.cardTitle}>Quiz İstatistikleri</Text>
          </View>
          
          <View style={styles.statsGrid}>
            <View style={styles.statItem}>
              <Text style={styles.statLabel}>Çözülen Quiz</Text>
              <Text style={styles.statValue}>{stats.quizzesTaken}</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statLabel}>Doğru Cevaplar</Text>
              <Text style={styles.statValue}>{stats.correctAnswers}/{stats.totalQuestions}</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statLabel}>Ortalama Puan</Text>
              <Text style={styles.statValue}>%{stats.averageScore}</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statLabel}>Toplam Puan</Text>
              <Text style={styles.statValue}>{stats.points}</Text>
            </View>
          </View>

          <View style={styles.progressContainer}>
            <View style={styles.progressHeader}>
              <Text style={styles.progressLabel}>Seviye İlerlemesi</Text>
              <Text style={styles.progressValue}>{stats.rank}</Text>
            </View>
            <View style={styles.progressBarContainer}>
              <View style={[styles.progressBar, { width: '65%' }]} />
            </View>
            <Text style={styles.progressInfo}>
              750 puan daha kazanarak bir sonraki seviyeye geçebilirsiniz
            </Text>
          </View>
        </View>

        {/* Menu items */}
        <View style={styles.card}>
          <MenuItem 
            icon="person-outline" 
            label="Hesap Bilgileri" 
          />
          <MenuItem 
            icon="trophy-outline" 
            label="Başarılarım" 
          />
          <MenuItem 
            icon="settings-outline" 
            label="Ayarlar" 
          />
          <MenuItem 
            icon="log-out-outline" 
            label="Çıkış Yap" 
            danger 
          />
        </View>
      </ScrollView>

      {/* Bottom navigation */}
      <View style={styles.bottomNav}>
        <NavButton icon="person" label="Profil" active />
        <NavButton icon="list" label="Quizler" />
        <NavButton icon="compass" label="Keşfet" />
        <NavButton icon="podium" label="Sıralama" />
      </View>
    </SafeAreaView>
  );
}

interface MenuItemProps {
  icon: string;
  label: string;
  danger?: boolean;
}

function MenuItem({ icon, label, danger = false }: MenuItemProps) {
  return (
    <TouchableOpacity 
      style={[
        styles.menuItem, 
        danger && styles.dangerMenuItem
      ]}
    >
      <View style={styles.menuItemLeft}>
        <Ionicons 
          name={icon as keyof typeof Ionicons.glyphMap} 
          size={22} 
          color={danger ? "#EF4444" : "#333"} 
        />
        <Text 
          style={[
            styles.menuItemLabel, 
            danger && styles.dangerMenuItemLabel
          ]}
        >
          {label}
        </Text>
      </View>
      <Ionicons name="chevron-forward" size={20} color="#999" />
    </TouchableOpacity>
  );
}

function NavButton({ icon, label, active = false }: NavButtonProps) {
  return (
    <TouchableOpacity style={styles.navButton}>
      <Ionicons 
      name={icon as keyof typeof Ionicons.glyphMap} 
      size={22} 
      color={active ? "#3B82F6" : "#666"} 
      />
      <Text 
      style={[
        styles.navButtonLabel, 
        active && styles.activeNavButtonLabel
      ]}
      >
      {label}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  headerIcons: {
    flexDirection: 'row',
  },
  iconButton: {
    padding: 8,
    marginLeft: 8,
  },
  scrollView: {
    flex: 1,
  },
  profileCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    marginHorizontal: 16,
    marginTop: 16,
    overflow: 'hidden',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  coverPhoto: {
    height: 80,
    backgroundColor: '#3B82F6',
  },
  profileContent: {
    alignItems: 'center',
    paddingBottom: 16,
  },
  avatarContainer: {
    marginTop: -40,
    borderWidth: 4,
    borderColor: 'white',
    borderRadius: 50,
    overflow: 'hidden',
  },
  avatar: {
    width: 80,
    height: 80,
  },
  profileInfo: {
    alignItems: 'center',
    marginTop: 8,
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  profileEmail: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
  },
  editButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 12,
    marginTop: 12,
  },
  editButtonText: {
    fontSize: 14,
    marginLeft: 4,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 12,
    marginHorizontal: 16,
    marginTop: 16,
    padding: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 8,
  },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 16,
  },
  statItem: {
    width: '50%',
    paddingVertical: 8,
  },
  statLabel: {
    fontSize: 14,
    color: '#666',
  },
  statValue: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 4,
  },
  progressContainer: {
    marginTop: 8,
  },
  progressHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  progressLabel: {
    fontSize: 14,
    fontWeight: '500',
  },
  progressValue: {
    fontSize: 14,
    fontWeight: '500',
  },
  progressBarContainer: {
    height: 8,
    backgroundColor: '#eee',
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#3B82F6',
  },
  progressInfo: {
    fontSize: 12,
    color: '#666',
    textAlign: 'right',
    marginTop: 4,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  menuItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuItemLabel: {
    fontSize: 16,
    marginLeft: 12,
  },
  dangerMenuItem: {
    borderBottomWidth: 0,
  },
  dangerMenuItemLabel: {
    color: '#EF4444',
  },
  bottomNav: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: '#eee',
    paddingBottom: 8,
    paddingTop: 8,
  },
  navButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  navButtonLabel: {
    fontSize: 12,
    marginTop: 4,
    color: '#666',
  },
  activeNavButtonLabel: {
    color: '#3B82F6',
  },
});