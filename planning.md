# Dropnote Planning

This document contains the concept used to implement DropNote.

## 1. Who is the website for?

Myself for training, no client/customer.

## 2. What is the website for?

**Business goal:** Business using them for promotions and vouches, business have to pay for a subscription.

**User goal:** People using DropNote in their free-time.

## 3. Target audience

People, 10-50 years old, passionate for outdoor activities.

## 4. Content

### Name

- DropNote
- GeoTrail
- TrekMarker
- NatureNotes
- WanderWords
- ExploreHub
- TrailTales
- EcoEcho
- OpenScout
- WildWhisper
- SeekSync

### Welcome Page

**Adventure Awaits You:**
Welcome to [Your App Name], where the great outdoors meets digital discovery! Embark on a journey of exploration, as your passions and geolocation converge. Leave virtual notes that come to life only when others venture into the same physical space. Uncover hidden gems, share your outdoor wisdom, and forge connections with like-minded adventurers. Your next adventure starts here.

**Notes Beyond the Horizon:**
Step into the world of [Your App Name], where your love for the outdoors meets the power of geolocation. Create notes tied to real-world locations, and let the landscape be your canvas. As you roam, notes come to life – a virtual trail of stories, tips, and shared experiences. Join our community of outdoor enthusiasts, and let the adventure unfold with every step you take.

**Discover Nature's Secrets:**
Welcome to [Your App Name], the platform that transforms the great outdoors into an interactive tapestry of stories. Immerse yourself in the thrill of discovery as you leave notes for fellow nature enthusiasts, each waiting to be unveiled only when others tread the same path. Explore, share, and connect with a community passionate about embracing the beauty of the world around us. Start your journey with [Your App Name] today.

### How does it work?

- **Embark on a Hike to Your Special Place:**
  Lace up those hiking boots and venture into the great outdoors. Choose a spot that holds a special meaning for you – whether it's a secluded forest glade, a mountain summit, or a hidden beach. As you hike, our app tracks your journey in real-time, connecting the physical path you tread with the digital world.

- **Drop Your Personal Note at the Spot:**
  Arrive at your chosen destination, and the adventure doesn't end there. With a few taps, leave a virtual note right at the heart of the place you've discovered. Share your thoughts, tips, or a snippet of your experience. It's your digital message in a bottle, waiting to be discovered by fellow explorers.

- **Share Your Adventure with Others:**
  The beauty of your exploration doesn't have to be experienced alone. Share your note with the community, and here's the magic – it becomes visible to others when they venture to the same location. Imagine the joy of fellow adventurers stumbling upon your note, creating a network of shared stories and hidden gems. Your journey doesn't just stay with you; it becomes part of a collective outdoor narrative.
  So, what are you waiting for? Lace up, explore, and let your outdoor adventures come to life in a whole new way with our app!

### Sign Up and Subscribe

Simple form for signing up and start dropping notes.

### Footer

Social links, legal, ...

## WebApp

- Start on Website
- Header with Logo, navigation, and login/sign up/user profile
- App itself
  - note view showing all notes around
  - map view showing all notes around
  - notes within 1km are visible, notes within 50m are visible and can be viewed.
- Users can read and write notes according to their subscription plan (see below)
- note contains:
  - title
  - text (optional), max 500 chars.
  - creator
  - creation time
  - last read time
  - last read user (exclude anons)
- User profile
  - user name
  - email
  - change password
  - change icon
- Statistics according to subscription plan
- Users can delete notes even if they are not close to it
- Gamification:
  - Statistics
  - Leaderboards
  - daily challenges
  - achievements
  - ...

## Subscription plans

**No Login**: FREE, read only
**Signed Up**: FREE, dropping up to 3 notes per day, favorite notes
**Basic**: 5€, dropping unlimited notes per day, statistics, gamification

# 5. Pages

- Welcome Page
- Authentication
- AppView (notes + map)
- Notes (new + edit + delete)
- User Profile
- Achievements
- Statistice

# 6. Tech Stack

- Client Side rendering, for learning purposes only
- Routing: ReactRouter
- Styling: StyledComponents, for learning purposes
- Remote State management: React Query, for learning purposes
- UI State management: Context API
- Form management: React Hook Form
- Others: React hot toast, Recharts, Supabase, Netlify, React icons, Colors from tailwindcss

Additionally move to Server side rendering after everything is up and running.
