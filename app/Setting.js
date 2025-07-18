import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Switch, Alert } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { COLORS, icons, images, SIZES } from '../constants';
import { ScreenHeaderBtn } from '../components';

const Settings = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const router = useRouter();

    // Load saved theme preference on component mount
    useEffect(() => {
        loadThemePreference();
    }, []);

    const loadThemePreference = async () => {
        try {
            const savedTheme = await AsyncStorage.getItem('darkMode');
            if (savedTheme !== null) {
                setIsDarkMode(JSON.parse(savedTheme));
            }
        } catch (error) {
            console.log('Error loading theme preference:', error);
        }
    };

    const saveThemePreference = async (isDark) => {
        try {
            await AsyncStorage.setItem('darkMode', JSON.stringify(isDark));
        } catch (error) {
            console.log('Error saving theme preference:', error);
        }
    };

    const toggleDarkMode = () => {
        const newDarkMode = !isDarkMode;
        setIsDarkMode(newDarkMode);
        saveThemePreference(newDarkMode);
        
        // Show confirmation alert
        Alert.alert(
            "Theme Changed",
            `${newDarkMode ? 'Dark' : 'Light'} mode activated!`,
            [{ text: "OK" }]
        );
    };

    const currentTheme = isDarkMode ? darkTheme : lightTheme;

    return (
        <SafeAreaView style={[styles.container, { backgroundColor: currentTheme.backgroundColor }]}>
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: currentTheme.headerBackground },
                    headerTitle: "Setting",
                    headerTintColor: currentTheme.textColor,
                }}
            />
            
            <Text style={[styles.title, { color: currentTheme.textColor }]}>Settings</Text>

            <View style={styles.settingsContainer}>
                {/* Theme Settings Section */}
                <View style={[styles.section, { backgroundColor: currentTheme.sectionBackground }]}>
                    <Text style={[styles.sectionTitle, { color: currentTheme.textColor }]}>
                        Appearance
                    </Text>
                    
                    <View style={styles.settingItem}>
                        <View style={styles.settingInfo}>
                            <Text style={[styles.settingLabel, { color: currentTheme.textColor }]}>
                                Dark Mode
                            </Text>
                            <Text style={[styles.settingDescription, { color: currentTheme.secondaryTextColor }]}>
                                Enable dark theme for better viewing in low light
                            </Text>
                        </View>
                        <Switch
                            value={isDarkMode}
                            onValueChange={toggleDarkMode}
                            trackColor={{ false: '#767577', true: '#81b0ff' }}
                            thumbColor={isDarkMode ? '#f5dd4b' : '#f4f3f4'}
                        />
                    </View>
                </View>

                {/* App Info Section */}
                <View style={[styles.section, { backgroundColor: currentTheme.sectionBackground }]}>
                    <Text style={[styles.sectionTitle, { color: currentTheme.textColor }]}>
                        App Information
                    </Text>
                    
                    <View style={styles.infoItem}>
                        <Text style={[styles.infoLabel, { color: currentTheme.textColor }]}>
                            Version
                        </Text>
                        <Text style={[styles.infoValue, { color: currentTheme.secondaryTextColor }]}>
                            1.0.0
                        </Text>
                    </View>
                    
                    <View style={styles.infoItem}>
                        <Text style={[styles.infoLabel, { color: currentTheme.textColor }]}>
                            Theme
                        </Text>
                        <Text style={[styles.infoValue, { color: currentTheme.secondaryTextColor }]}>
                            {isDarkMode ? 'Dark' : 'Light'}
                        </Text>
                    </View>
                </View>

                {/* Actions Section */}
                <View style={[styles.section, { backgroundColor: currentTheme.sectionBackground }]}>
                    <TouchableOpacity 
                        style={[styles.actionButton, { backgroundColor: currentTheme.buttonBackground }]}
                        onPress={() => {
                            Alert.alert(
                                "Reset Settings",
                                "Are you sure you want to reset all settings to default?",
                                [
                                    { text: "Cancel", style: "cancel" },
                                    { 
                                        text: "Reset", 
                                        style: "destructive",
                                        onPress: () => {
                                            setIsDarkMode(false);
                                            saveThemePreference(false);
                                            Alert.alert("Settings Reset", "All settings have been reset to default.");
                                        }
                                    }
                                ]
                            );
                        }}
                    >
                        <Text style={[styles.actionButtonText, { color: currentTheme.buttonTextColor }]}>
                            Reset to Default
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>

            <TouchableOpacity 
                style={[styles.backButton, { backgroundColor: currentTheme.backButtonBackground }]}
                onPress={() => router.push('/')}
            >
                <Text style={[styles.backButtonText, { color: currentTheme.backButtonTextColor }]}>
                    Back to Home
                </Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

// Light theme colors
const lightTheme = {
    backgroundColor: '#ADD8E6',
    headerBackground: COLORS.lightWhite,
    textColor: '#2c3e50',
    secondaryTextColor: '#7f8c8d',
    sectionBackground: '#87CEEB',
    buttonBackground: '#F5E6A9',
    buttonTextColor: '#2c3e50',
    backButtonBackground: '#F5E6A9',
    backButtonTextColor: '#2c3e50',
};

// Dark theme colors
const darkTheme = {
    backgroundColor: '#1a237e', // Dark blue
    headerBackground: '#283593',
    textColor: '#ffffff',
    secondaryTextColor: '#b0bec5',
    sectionBackground: '#303f9f',
    buttonBackground: '#3f51b5',
    buttonTextColor: '#ffffff',
    backButtonBackground: '#3f51b5',
    backButtonTextColor: '#ffffff',
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 40,
        marginBottom: 30,
    },
    settingsContainer: {
        flex: 1,
        paddingHorizontal: 20,
    },
    section: {
        marginBottom: 20,
        borderRadius: 15,
        padding: 20,
    },
    sectionTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 15,
    },
    settingItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10,
    },
    settingInfo: {
        flex: 1,
        marginRight: 20,
    },
    settingLabel: {
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 5,
    },
    settingDescription: {
        fontSize: 14,
        lineHeight: 20,
    },
    infoItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(255, 255, 255, 0.1)',
    },
    infoLabel: {
        fontSize: 16,
        fontWeight: '500',
    },
    infoValue: {
        fontSize: 16,
    },
    actionButton: {
        paddingVertical: 15,
        paddingHorizontal: 25,
        borderRadius: 10,
        alignItems: 'center',
    },
    actionButtonText: {
        fontSize: 16,
        fontWeight: '600',
    },
    backButton: {
        marginHorizontal: 20,
        marginBottom: 30,
        paddingVertical: 15,
        borderRadius: 25,
        alignItems: 'center',
    },
    backButtonText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
});

Settings.id = 'Settings';

export default Settings;