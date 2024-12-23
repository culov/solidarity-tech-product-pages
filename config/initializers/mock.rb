module Mock
  META = {
    copyright: "© Solidarity Tech #{Time.now.year}",
    email: 'support@solidarity.tech',
  }.freeze

  URL_PREFIX = Rails.env == "development" ? "http://dashboard.localhost:3000" : "https://dashboard.solidarity.tech"

  CTA = {
    left: {
      icon: 'icon_rocket',
      title: 'Get started now',
      description:
        'Sign up to begin using the all-in-one organizer toolkit',
      button: {
        text: 'Sign Up Now',
        link: '/pricing',
      },
    },
    right: {
      icon: 'icon_phone_call',
      title: 'Talk to a real human',
      description: 'Get the gist of Solidarity Tech with a guided demo',
      button: {
        text: 'Schedule Call',
        link: '/schedule-a-demo',
      },
    },
  }.freeze

  MENU = [
    {
      name: 'Product',
      items: true,
    },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Log in', path: 'https://dashboard.solidarity.tech/login' },
  ]

  SUB_MENU = {
    title: 'Everything you need to win campaigns',
    items: [
      {icon: 'icon_table', name: 'CRM', path: '/crm'},
      {icon: 'icon_phone_call', name: 'Calling', path: '/calling'},
      {icon: 'icon_chat_circle_dots', name: 'Texting', path: '/texting'},
      {icon: 'icon_envelope', name: 'Email', path: '/email'},
      {icon: 'icon_browsers', name: 'Website', path: '/website'},
      {icon: 'icon_flag_banner', name: 'Events', path: '/events'},
      {icon: 'icon_device_mobile', name: 'Field App', path: '/field-app'},
      {icon: 'icon_chart_pie', name: 'Reporting', path: '/reporting'},
      {icon: 'icon_automations', name: 'Automations', path: '/automations'},
      {icon: 'icon_donations', name: 'Donations', path: '/donations'},
    ],
    button: {
      text: 'Get started',
    }
  }.freeze

  FOOTER = {
    description:
      'The all-in-one CRM built for organizers.',
    links: [
      {
        name: 'Resources',
        sublinks: [
          { name: 'What is phonebanking', path: '/what-is-phonebanking-how-to-run-a-phonebank' },
          { name: 'How to plan an event', path: '/how-to-plan-an-event' },
          { name: 'P2P texting guide', path: '/peer-to-peer-texting-guide' },
          { name: 'Run a scheduled calls program', path: '/scheduled-calls-program' },
        ],
      },
      {
        name: 'Product',
        sublinks: [
          { name: 'CRM', path: '/crm' },
          { name: 'Calling', path: '/calling' },
          { name: 'Texting', path: '/texting' },
          { name: 'Website', path: '/website' },
        ],
      },
      {
        name: 'Product',
        sublinks: [
          { name: 'Email', path: '/email' },
          { name: 'Events', path: '/events' },
          { name: 'Field App', path: 'field-app' },
          { name: 'Reporting', path: '/reporting' },
        ],
      },
      # {
      #   name: 'Who we are',
      #   sublinks: [
      #     { name: 'About', path: '#' },
      #     { name: 'Careers', path: '#' },
      #     { name: 'Blog', path: '#' },
      #     { name: 'Resources', path: '#' },
      #   ],
      # },
      {
        name: 'Other',
        sublinks: [
          { name: 'Privacy', path: '/privacy' },
          { name: 'Terms', path: '/terms' },
          { name: 'Documentation', path: 'https://www.solidarity.tech/docs' },
          { name: 'Pricing', path: '/pricing' },
          # { name: 'Cookies', path: '/cookies' },
          # { name: 'Contact us', path: '#' },
        ],
      },
    ],
    social: [
      { name: 'Twitter', path: 'https://twitter.com/solidarity_tech', icon: 'social_icon_twitter' },
      { name: 'Linked In', path: 'https://www.linkedin.com/company/solidarity-tech/', icon: 'social_icon_linkedin' },
      # { name: 'Facebook', path: '#', icon: 'social_icon_facebook' },
    ],
    copyright: "© #{Time.now.year} Solidarity Tech. All rights reserved.",
  }.freeze

  CRM = {
    hero: {
      label: {
        text: 'CRM Feature',
        icon: 'icon_table',
      },
      title: 'The CRM with everything you need to run winning campaigns',
      description:
        'Supercharge your campaign with software built to organize for power.',
      image: {
        fromLeft: '-7.056%',
        fromRight: '-12.5%',
        src: 'crm_hero',
      },
      colors: {
        background: '#F2F4FA',
        shadow_left: 'rgba(113,68,255,0.37)',
        shadow_right: 'rgba(108,229,255,0.7)',
      },
    },
    features_1: {
      start: 'left',
      items: [
        {
          title: 'Unified all-in-one CRM',
          extra_title: 'for organizers',
          description:
            'By maintaining all your organization’s data on the same platform, you’ll see massive gains in organizer efficiency and open new campaign possibilities.',
          image: { src: 'crm_feature_1' },
        },
        {
          title: 'Distributed iOS and Android field',
          extra_title: 'organizer app',
          description:
            'Maximize the potential of your entire team by effectively leveraging the energy of volunteers while simultaneously nurturing their leadership skills.',
          image: { src: 'crm_feature_2' },
        },
        {
          title: 'Calling, texting & email, all built-in',
          extra_title: 'the dashboard',
          description:
            "All calls and text come from a 2-way dedicated local phone number that belongs to your organization. Shared text & call inboxes makes it easy for your team to work together to stay in contact with supporters.",
          image: { src: 'crm_feature_3' },
        },
      ],
    },
    features_2: {
      start: 'right',
      items: [
        {
          title: 'Priced for grassroots affordability,',
          extra_title: 'without seat-based prices',
          description:
            'We set generous limits on how many team members you can, to ensure even small-budget organizations can be free involve a wide range of staff and volunteers in their organizing.',
          image: { src: 'crm_feature_4' },
        },
        {
          title: 'Import and export your data with ease',
          extra_title: 'with ease',
          description:
            'Easily migrate all your data from your existing CRM, or export any data you need to take out of Solidarity Tech. Our support team is always available to help.',
          image: { src: 'crm_feature_5' },
        },
      ],
    },
    special_block: {
      title_part_1: 'Help your team ',
      title_part_2: 'develop deep relationships, ',
      title_part_3: 'at scale',
      image: { src: 'crm_special_block' },
      image_mobile: { src: 'crm_special_block-mobile' },
      triggers: [
        {
          icon: 'icon_chart_bar_horizontal',
          title: 'Custom, trackable assessments levels',
          text: 'Assess all workers using your own assessment statuses and monitor your progress.',
        },
        {
          icon: 'icon_bell_ringing',
          title: 'Follow-up tasks for easier leadership development',
          text: 'Make measureable asks of supporters like joining meeting or recruiting friend. Create follow-up tasks to check back in.',
        },
        {
          icon: 'icon_path',
          title: 'Keep relationships personal, at scale',
          text: 'Route incoming calls and texts coming into the organization to the right organizer for response.',
        },
      ],
    },
    trigger_block: {
      title: 'Customize your CRM to ',
      extra_title: 'match your org’s attributes and structure',
      images: [
        { src: 'crm_trigger_block_1', ratio: 1 },
        { src: 'crm_trigger_block_2', ratio: 1 },
      ],
      colors: {
        background: '#F2F4FA',
        shadow_left: 'rgba(113,68,255,0.2)',
        shadow_right: 'rgba(108,229,255,0.2)',
      },
      triggers: [
        {
          icon: 'icon_textbox',
          title: 'Custom fields to match your organization',
          text: 'Track and organize the most important data about each of your contacts, and use them to personalize communications',
        },
        {
          icon: 'icon_git_branch',
          title: 'Chapters & branches to translate your structure',
          text: 'Segment your contacts into federated groupings by name (Local 11) or geography (NYC metro chapter). Streamline local organizing with custom-drawn geographic boundaries around branches.',
        },
        {
          icon: 'icon_address_book',
          title: 'Roles & <br> permissions',
          text: 'Set the access level of team members at a granular level, to pre-defined or custom roles.',
        },
      ],
    }

  }.freeze

  VOICE = {
    hero: {
      label: {
        text: 'Voice Features',
        icon: 'icon_voice',
      },
      title: 'Spend less time dialing, and more time in conversation',
      description:
        'Double the call volume and efficiency of organizers with Solidarity Tech’s built-in calling tools',
      image: {
        fromLeft: '-1.68%',
        fromRight: '-17.17%',
        src: 'voice_hero',
      },
      colors: {
        background: '#EEF9FD',
        shadow_left: '#B4DAE8',
        shadow_right: 'rgba(108,229,255,0.7)',
      },
    },
    features_1: {
      start: 'left',
      items: [
        {
          title: 'Built-in calling means you never have to log another call',
          description:
            'Every incoming and outgoing call is automatically logged, saving organizer time and giving leaders a clear picture of your organizing activity. Affordable, pay-as-you-go pricing will reduce your phone bill.',
          image: { src: 'voice_feature_1' },
        },
        {
          title: 'Have your outgoing calls answered',
          description:
            'Use local phone numbers of your choice, as a consistent, shared organizational numbers through which calls and texts are sent and received to your contacts. Use Branded Calls to have your organization\'s name show up on caller ID.',
          image: { src: 'voice_feature_2' },
        },
      ],
    },
    features_2: {
      start: 'right',
      items: [
        {
          title: 'Automatic record of every call  & text your team makes',
          description:
            'Having all your communications data automatically stored in Solidarity Tech makes it easy to segment and target your list based exactly the criteria you need.',
          image: { src: 'voice_feature_3' },
        },
      ],
    },
    trigger_block: {
      title: 'Turn casual online supporters into real-life organizers',
      extra_title: '',
      images: [
        { src: 'voice_trigger_1' },
        { src: 'voice_trigger_2' },
        { src: 'voice_trigger_3' },
      ],
      colors: {
        background: '#F5F6FB',
        shadow_left: 'rgba(113,68,255,0.2)',
        shadow_right: 'rgba(113,68,255,0.2)',
      },
      triggers: [
        {
          icon: 'icon_arrows_out',
          title: 'Let volunteer-organizers grow your movement',
          text: 'Build leadership by assigning volunteers the meaningful work of developing relationships over the phone with supporters.',
        },
        {
          icon: 'icon_calendar_check',
          title: 'Scheduled calls with interested new prospects',
          text: 'Let supporters choose when they’re available to talk with an organizer and bring them into the movement.',
        },
        {
          icon: 'icon_chart_bar',
          title: 'Tools to manage your scheduled call program',
          text: ' Our suite of tools helps you manage missed scheduled calls, ensure a wide call availability, offer scheduled calls in any number of languages, and much more.',
        },
      ],
    },
    trigger_block_v: {
      title: 'Reach more contacts with less effort.',
      extra_title: '',
      image: { src: 'voice_trigger_v' },
      colors: {
        background: '#F5F6FB',
        shadow: 'rgba(108,229,255,0.2)',
        text: '#000000',
      },
      triggers: [
        {
          icon: 'icon_device_mobile',
          title: 'Built-in phonebanks to meet your goals',
          text: '<div class="trigger__text">Choose the appropriate phonebank types (<span class="trigger__text-dashed" data-controller="tippy" data-tippy-target="item" data-tippy-content-value="Personalized list-based phonebanking for effective, personal outreach">1-to-1 assignments</span>, <span class="trigger__text-dashed"  data-controller="tippy" data-tippy-target="item" data-tippy-content-value="Double your outbound call volume by seamlessly cycling through contact calls lists without the need for app-switching">power dialer</span>, or <span class="trigger__text-dashed" data-controller="tippy" data-tippy-target="item" data-tippy-content-value="Automated dialer that allows your team to dial multiple number at once and be immediately connected to people who pick up the call">predictive dialer</span>) to fit your goal.</div>',
        },
        {
          icon: 'icon_phone_outgoing',
          title: 'High-performance predictive dialer',
          text: 'Increase the number of calls your team can make in an hour by 400%, using our best-in-class predictive dialer.',
        },
        {
          icon: 'icon_note',
          title: 'Phonebank with just your mobile phone',
          text: 'No need to have your team use a computer for notes or manually dialing. Everything happens on their phone.',
        },
      ],
    },
  }.freeze

  SMS = {
    hero: {
      label: {
        text: 'SMS Features',
        icon: 'icon_chat_circle_dots',
      },
      title: 'Know your messages are actually being read',
      description:
        'Develop and maintain genuine relationships with your contacts over SMS, with Solidarity Tech’s texting tools',
      image: {
        fromLeft: '0.001%',
        fromRight: '0.001%',
        src: 'sms_hero',
      },
      colors: {
        background: '#FAF5FF',
        shadow_left: 'rgba(85,51,191,0.4)',
        shadow_right: 'rgba(85,51,191,0.4)',
      },
    },
    features: {
      start: 'left',
      items: [
        {
          title: 'Send personalized bulk texts to your contacts with one click',
          description:
            'Rapidly send personalized text messages in any number of languages. Use merge tags to greet them by name or include custom shortlinks so they can easily click, be recognized, and quickly take action on your pages.',
          image: { src: 'sms_feature_1' },
        },
        {
          title: 'Peer-to-peer texting for personal conversations, at scale',
          description:
            'Remove repetitive manual texting work and let volunteers focus on conversations. Text templates for common responses enable your volunteers to respond quickly.',
          image: { src: 'sms_feature_2', shadow: 'rgba(85,51,191,0.3)' },
        },
        {
          title: 'Build your list with text-to-join keywords',
          description:
            'Setup your keywords and your automated text reply. Capture additional contact data by sending text auto-replies including a link to a follow-up form.',
          image: { src: 'sms_feature_3', shadow: 'rgba(85,51,191,0.3)' },
        },
        {
          title: '10DLC compliance',
          description:
            "We're in compliance with all the latest carrier texting and calling regulations, so you can be sure that your texts are delivered and your calls reach their recipients.",
          image: { src: 'sms_feature_4' },
        },
      ],
    },
    trigger_block_v: {
      title: 'Efficient, meaningful conversations over text',
      extra_title: '',
      image: { src: 'sms_trigger_block_v' },
      colors: {
        background: '#F5F6FB',
        shadow: 'rgba(0,0,0,0)',
        text: '#000000',
      },
      triggers: [
        {
          icon: 'icon_device_mobile',
          title: 'Consistent, local phone number for your organization',
          text: ' Supporters can always call or text your fixed local numbers to be in-touch with your organization.',
        },
        {
          icon: 'icon_users',
          title: 'Reach your supporters where they are',
          text: 'Whether from the app or dashboard, text your supporters from a local number they recognize, so you can break past all the text spam and have your messages read.',
        },
        {
          icon: 'icon_money',
          title: 'Simple SMS pricing, much cheaper than the rest',
          text: 'Our pay-as-you-go pricing is unmatched, starting as low as $0.01 per text',
        },
      ],
    },
  }.freeze

  EMAIL = {
    hero: {
      label: {
        text: 'Email Features',
        icon: 'icon_envelope_simple',
      },
      title: 'Send campaign emails that break through the noise',
      description:
        'Reliably send emails at unbeatable rates from your custom email addresses, with our bulk email and email automation tools',
      image: {
        fromLeft: '0.001%',
        fromRight: '0.001%',
        src: 'email_hero',
      },
      colors: {
        background: '#F5F6FB',
        shadow_left: 'rgba(22,27,52,0.4)',
        shadow_right: 'rgba(22,27,52,0.4)',
      },
    },
    features: {
      start: 'left',
      items: [
        {
          title: 'See what’s working for your organization',
          description: 'Get full visibility into your email sends, from seeing which supporters opened and clicked links, to who completed your desired action.',
          image: { src: 'email_feature_1' },
        },
        {
          title: 'Total customizability with raw HTML editor',
          description:
            'If the WSIWYG email editor isn’t accomodating the advanced functionality you’re looking for, edit your emails HTML directly.',
          image: { src: 'email_feature_2' },
        },
        {
          title: 'Schedule your send time',
          description:
            'Effortlessly schedule your emails to reach your contact\'s inboxes at the ideal time.',
          image: { src: 'email_feature_3' },
        },
      ],
    },
    trigger_block_v: {
      title: 'Bulk email with powerful personalization',
      extra_title: '',
      image: { src: 'email_trigger_block_v' },
      colors: {
        background: '#F5F6FB',
        shadow: 'rgba(0,0,0,0)',
        text: '#000000;',
      },
      triggers: [
        {
          icon: 'icon_tag',
          title: 'Dynamic contact data at your fingertips',
          text: 'Merge Tags personalize your content and speak to your leads by name, reference their contact information, and even use custom fields.',
        },
        {
          icon: 'icon_paper_plane_tilt',
          title: 'Custom domains, from unlimited senders',
          text: 'Send bulk emails from whatever email addresses you’d like, on your organization’s domain.',
        },
        {
          icon: 'icon_tray',
          title: 'Customizable email templates',
          text: 'Design winning email templates and share them across your organization for all team members to use.',
        },
      ],
    },
  }.freeze

  EVENT = {
    hero: {
      label: {
        text: 'Event Features',
        icon: 'icon_flag_banner',
      },
      title: 'High-performance event management and volunteer recruitment',
      description:
        'Solidarity Tech makes gathering RSVPs and maximizing turnout easy, for any type of event',
      image: {
        fromLeft: '0.001%',
        fromRight: '0.001%',
        src: 'event_hero',
      },
      colors: {
        background: '#EEF9FD',
        shadow_left: 'rgba(180,218,232,0.5)',
        shadow_right: 'rgba(108,229,255,0.35)',
      },
    },
    trigger_block_v_1: {
      title: 'Turn out supporters to events with confidence',
      extra_title: '',
      image: { src: 'event_trigger_block_v_1' },
      colors: {
        background: '#F5F6FB',
        shadow: 'rgba(85,51,191,0.3)',
        text: '#000000',
      },
      triggers: [
        {
          icon: 'icon_bell_ringing',
          title: 'Event management system with automated reminders',
          text: 'Streamline event planning with smart RSVP tools and timely, automated reminders to boost attendance and engagement',
        },
        {
          icon: 'icon_calendar_blank',
          title: 'Handle any event, online or in-person',
          text: 'Support for any event you decide to organize: Invite only or open to the public. One-time or recurring. In-person or online. Single shift or multiple shifts. We\'ve got you covered.',
        },
        {
          icon: 'icon_users',
          title: 'Make sure your supporters show up, bring friends, and stay engaged',
          text: 'Drive attendance and encourage friend invitations with built-in reminder and sharing tools. Gain valuable insights into supporter social networks by equipping organizers with referral data.',
        },
      ],
    },
    trigger_block_v_2: {
      title: 'Fully integrated event mobilization',
      extra_title: '',
      image: { src: 'event_trigger_block_v_2' },
      colors: {
        background: '#151226',
        shadow: 'rgba(108,229,255,0.3)',
        text: '#FFFFFF',
        text_secondary: '#FFFFFF',
      },
      triggers: [
        {
          icon: 'icon_bell_ringing',
          title: 'Event mobilization built into CRM & app',
          text: 'With everything you need to run a successful event in your CRM, email confirmations, calendar invites, and reminders keep attendees informed and your events running smoothly.',
        },
        {
          icon: 'icon_calendar_blank',
          title: 'Gather RSVPs from phonebanks, textbanks, & event pages',
          text: 'Use a comprehensive strategy with a variety of communication channels ensures you grab a suporrter\'s attention and win their committment to attend an event.',
        },
        {
          icon: 'icon_users',
          title: 'Effortless attendance tracking',
          text: 'Easily manage event check-ins. Upload a Zoom CSV for virtual events or use our smart check-in feature to track attendees live at in-person events—fast, reliable, and hassle-free.',
        },
      ],
    },
  }.freeze

  REPORTING = {
    hero: {
      label: {
        text: 'Reporting Features',
        icon: 'icon_chart_bar',
      },
      title: 'Gain valuable insights from your data and make smart decisions',
      description:
        'Reporting analytics give you a holistic view of your entire organization: people, calls, texts, web activity, donations and more.',
      image: {
        fromLeft: '0.001%',
        fromRight: '0.001%',
        src: 'reporting_hero',
      },
      colors: {
        background: '#FAF5FF',
        shadow_left: 'rgba(85,51,191,0.15)',
        shadow_right: 'rgba(85,51,191,0.2)',
      },
    },
    trigger_block_v_1: {
      title: 'Performance tracking made easy and automatic',
      extra_title: '',
      image: { src: 'reporting_trigger_block_v_1' },
      colors: {
        background: '#F5F6FB',
        shadow: 'rgba(0,0,0,0)',
        text: '#000000',
      },
      triggers: [
        {
          icon: 'icon_tree_structure',
          title: 'Data to help you coach your volunteers & staff',
          text: 'Gain real-time insights into organizer performance with dynamic reports. Dig deeper by comparing to previous periods and applying filters for team members or groups.',
        },
        {
          icon: 'icon_cube',
          title: 'Identify and overcome roadblocks',
          text: 'Is an organizer over-extending themself? Are calls too brief to make meaningful connections? Help coach your team to improve your team’s abilities.',
        },
        {
          icon: 'icon_git_diff',
          title: 'Compare your data over time periods',
          text: 'Analyze KPIs over time to ensure your team stays on course to meet your goals.',
        },
      ],
    },
    trigger_block_v_2: {
      title: 'Stay informed on the metrics that matter to your team',
      extra_title: '',
      image: { src: 'reporting_trigger_block_v_2' },
      colors: {
        background: '#151226',
        shadow: 'rgba(108,229,255,0.3)',
        text: '#FFFFFF',
        text_secondary: '#FFFFFF',
      },
      triggers: [
        {
          icon: 'icon_chart_bar_horizontal',
          title: 'Track your KPIs',
          text: 'Closely follow your most critical metrics, whether it’s signed union authorization cards or the number of supporters attending orientation meetings.',
        },
        {
          icon: 'icon_scan',
          title: 'Monitor assessment changes',
          text: "Make your leadership development processes measureable and be confident that you always have new leaders ready to step up.",
        },
        {
          icon: 'icon_database',
          title: 'Data export',
          text: 'View your data using our comprehensive reporting charts, or export your data to digest it into your favorite reporting tools.',
        },
      ],
    },
    features: {
      start: 'left',
      items: [
        {
          title: 'Donations and dues analytics',
          extra_title: '',
          description:
            'View real-time data on your organization’s incoming donations and bank payouts.',
          image: { src: 'reporting_feature_1' },
        },
      ],
    },
  }.freeze

  FIELD_APP = {
    hero: {
      label: {
        text: 'Field App',
        icon: 'icon_device_mobile_speaker',
      },
      title: 'Empower your volunteers & staff to engage contacts & build people-power',
      description:
        'Harness the energy of volunteers and develop leadership skills, with our distributed field organizer app',
      image: {
        fromLeft: '4.5%',
        fromRight: '4.5%',
        src: 'field_app_hero',
      },
      colors: {
        background: '#f5f6fb',
        shadow_left: 'rgba(22,27,52,0.3)',
        shadow_right: 'rgba(22,27,52,0.3)',
      },
    },
    trigger_block_v: {
      title: 'Help online supporters become in-real-life organizers',
      extra_title: '',
      image: { src: 'field_app_trigger_block_v' },
      colors: {
        background: '#151226',
        shadow: 'rgba(0,0,0,0)',
        text: '#ffffff',
        text_secondary: '#FFFFFF',
      },
      triggers: [
        {
          icon: 'icon_device_mobile_speaker',
          title: 'User-friendly app gets supporters organizing with minimal training',
          text: 'Give motivated supporters a meaningful way to contribute to your campaigns while nurturing their leadership skills.',
        },
        {
          icon: 'icon_users_three',
          title: 'Build distributed leadership',
          text: 'Take ownership of 1-one-1 relationships by becoming a point-person responsible for fielding calls and texts for a contact. Team members receive push notifications when an assigned contact texts or calls the shared organization phone number.',
        },
        {
          icon: 'icon_thumbs_up',
          title: 'Multiple ways to involve your volunteers',
          text: 'Phone banking, text banking, scheduled calls, in-field recruitment, and fostering relationships with supporters. All from your phone.',
        },
      ],
    },
    features: {
      start: 'right',
      items: [
        {
          title: 'Phonebank and textbank, without a computer',
          extra_title: '',
          description:
            'Eliminate the need to be on your computer and your phone while performing peer-to-peer calling or texting. Let your supporters call and text anywhere at anytime with the Solidarity Tech native mobile app',
          image: { src: 'field_app_feature_1' },
        },
        {
          title: 'Add new contacts from the field',
          extra_title: '',
          description: 'The Solidarity Tech mobile field app is the ultimate tool for effective organizers. Ditch the clipboard forever, with our native iOS and Android apps.',
          image: { src: 'field_app_feature_2' },
        },
      ],
    },
  }.freeze

  FEATURES = {
    hero: {
      label: {
        text: 'Website Features',
        icon: 'icon_cube',
      },
      title: 'Integrated website with page templates for every organizing need',
      description:
        'Mobilize contacts into action and generate new leads from your website, using our powerful, best-in-class form builder.',
      image: {
        fromLeft: '-16.87%',
        fromRight: '-22.57%',
        src: 'features_hero',
      },
      colors: {
        background: '#151226',
        shadow_left: 'rgba(85,51,191,0.8)',
        shadow_right: 'rgba(85,51,191,0.8)',
      },
    },
    trigger_block_v: {
      title: 'Powerful websites designed for organizing and mobilizing',
      extra_title: '',
      image: { src: 'features_trigger_block_v' },
      colors: {
        background: '#F5F6FB',
        shadow: 'rgba(0,0,0,0)',
        text: '#000000',
      },
      triggers: [
        {
          icon: 'icon_tree_structure',
          title: 'Full-featured website with CRM integration',
          text: 'Build mulitlingual, mobile-friendly forms and websites that are deeply integrated with the CRM, updating contact record data in real-time from web forms.',
        },
        {
          icon: 'icon_cube',
          title: 'Replace or use alongside your existing site',
          text: 'Keep your existing website and supplement it with Solidarity Tech web forms, or have us host your entire web presence.',
        },
        {
          icon: 'icon_git_diff',
          title: 'Custom domain or subdomain',
          text: 'Connect your website to the root domain or a custom subdomain (e.g. act.drivers-united.org) to remove all traces of Solidarity Tech branding and make it 100% yours.',
        },
      ],
    },
    features_1: {
      start: 'right',
      title: 'Make your website an invaluable campaign asset',
      sub_title: 'A variety of battled-tested page types help you win, in any languages you choose to support',
      items: [
        {
          title: 'Schedule a call with an organizer',
          extra_title: '',
          description: 'Train your organizers to accept scheduled calls and immediately begin offering them to supporters, in multiple languages. Dedicated tools to manage call availability and easily cancel or reschedule scheduled calls.',
          image: { src: 'features_feature_1' },
        },
        {
          title: 'Mobilize supporters and build your list',
          extra_title: '',
          description: 'Use our modern action pages let you gather event RSVPs and petition signatures, or trigger phone calls or emails to geo-targeted representatives',
          image: { src: 'features_feature_2', shadow: 'rgba(85,51,191,0.2)' },
        },
        {
          title: 'Powerful automations enable new campaigns',
          extra_title: '',
          description: 'Merge input from a form with a PDF and email the results to a target email (e.g. <a target="_blank" href="https://www.vice.com/en/article/wxey95/gig-workers-release-tool-to-calculate-stolen-wages-and-unpaid-expenses">RDU wage claims campaign</a>). Or have the merged PDF mailed via USPS to an address (e.g. <a target="_blank" href="https://www.vice.com/en/article/wx84q9/gig-workers-must-opt-out-of-arbitration-to-enforce-prop-22-benefits-rights-group-says">RDU arbitiration opt-out</a>).',
          image: { src: 'features_feature_3', shadow: 'rgba(21,18,38,0.2)'},
        },
      ],
    },
    features_2: {
      start: 'left',
      items: [
        {
          title: 'Accept recurring or one-time donations, and manage a dues system.',
          extra_title: '',
          description: 'Whether you’re running a membership dues program, collecting one-time donations, or gathering recurring sustainer donations, we’ve got the donation pages and tracking tools to get you the best results.',
          image: { src: 'features_feature_4', shadow: 'rgba(108,229,255,0.2)' },
        },
        {
          title: 'Create surveys, and poll supporters on issues',
          extra_title: '',
          description: 'Learn about your audience with unlimited survey responses. Use a basic survey or our unique issues-based demands surveys (eg. <a target="_blank" href="https://www.drivers-united.org/p/drivers-bill-of-rights">RDU Driver’s Bill of Rights</a>) to get insights into what your supporters want ',
          image: { src: 'features_feature_5' },
        },
        {
          title: 'Let your supporters tell their stories',
          extra_title: '',
          description: 'Use our imaginative "Montage" page to create real-time montages using supporter-submitted images. Or let your supporters upload videos sharing their stories in response to prompts and make the best videos available publicly.',
          image: { src: 'features_feature_6' },
        },
        {
          title: 'Connect with custom analytics solutions',
          extra_title: '',
          description: 'Use our built-in analytics or connect your own analytics solution (e.g. Google Analytics). Export all of your response data as CSV or JSON to analyze your data elsewhere. All pages offer GDPR compliant settings.',
          image: { src: 'features_feature_7' },
        },
      ],
    },
  }.freeze
  # Helping unions, advocacy organizations & non-profits build people-powered movements that
  LANDING = {
    hero: {
      title: 'The all-in-one CRM built for organizers',
      description: 'Helping unions & grassroots organizations build people-powered movements that ',
      description_text_transform: 'transform society/win demands/win elections/win contracts',
      primary_button: {
        text: 'Sign Up',
        link: '/pricing',
      },
      secondary_button: {
        text: 'Get Demo',
        link: '/schedule-a-demo',
      },
      image: {
        src: 'landing_hero',
        fromLeft: '-15.14%',
        fromRight: '-17.14%',
      },
      colors: {
        background: '#151226',
        shadow_left: 'rgba(85,51,191,0.8)',
        shadow_right: 'rgba(85,51,191,0.8)',
      },
    },
    sub_menu_block: {
      title: 'Everything you need to win campaigns',
    },
    logos_block_1: {
      title: 'Trusted by teams at hundreds of leading labor & progressive organizations',
      logos: ['logo_rdu', 'logo_cwa', 'logo_iww', 'logo_apple_together', 'logo_ufcw']
    },
    features: {
      start: 'left',
      title: 'Finally, a CRM your team will love, at all sizes & stages',
      sub_title: 'Gather more leads, convert them into supporters, develop them into real-life activists, and mobilize your base into action.',
      items: [
        {
          title: 'Every digital organizing tool, in one integrated system',
          extra_title: '',
          tag: "UNIFIED CRM",
          description: 'No more tool switching and endless data syncing. Always have a complete picture of all your contacts & organizers, starting at just $29 per month.',
          image: { src: 'landing_feature_1' },
        },
        {
          title: 'Personalized messages to supporters, when it matters most',
          extra_title: '',
          tag: "MULTI-CHANNEL COMMUNICATION",
          description: 'High performance bulk or 1-to-1 texting, calling, and email from our web or mobile app. Look professional & consistent, with a free shared local organization phone number & powerful website.',
          image: { src: 'landing_feature_2' },
        },
        {
          title: 'Build and expand your base',
          extra_title: '',
          tag: "MADE FOR ORGANIZING",
          description: 'Turn online supporters into in-real-life activists. Solidarity Tech helps you develop deep, personal relationships at scale—without seat-based pricing, so you can involve more volunteers without extra costs.',
          image: { src: 'landing_feature_3' },
        },
        {
          title: 'Activate your base',
          extra_title: '',
          tag: "MOBILIZE SUPPORTERS",
          description: 'World-class tools for phonebanking, textbanking, and event management help maximize turnout efficiently. Powerful forms and automations make it easier than ever for supporters to take meaningful action, both online and in-person.',
          image: { src: 'landing_feature_4' },
        },
      ]
    },
    logos_block_2: {
      title: 'Featured In',
      logos: ['logo_the_new_york_times', 'logo_the_economist', 'logo_npr']
    },
  }.freeze

  PRICING = {
    hero: {
      label: {
        text: 'Pricing',
        icon: 'icon_currency_circle_dollar',
      },
      title: 'Plans & Pricing',
      description:
        'Straightforward and affordable pricing at all stages and sizes. All plans include email, calling, texting, donations, and a website.',
      colors: {
        background: '#faf5ff',
        shadow_left: 'rgba(85, 51, 191, 0.15)',
        shadow_right: 'rgba(85, 51, 191, 0.2)',
      },
      input: {
        label: 'Size of your contact plan',
        placeholder: 'Up to 500',
      },
      cards: [
        {
          name: 'Essentials',
          icon: 'icon_zap',
          price: '',
          description: 'Everything small organizations needs to run winning campaigns',
          buttonText: 'Get Essentials',
          link: "#{URL_PREFIX}/signup?plan=essentials&contacts=1000",
          features: [
            'Comprehensive, unified organizing CRM',
            'Built-in Calling, Texting, and Email',
            'Event Management',
            'Full Featured Website & Powerful Forms',
            'Phonebanking',
            'Unbeatable outreach rates: 1.8¢ per text, 25¢ per 1,000 emails, 4¢ per call minute'
          ]
        },
        {
          name: 'Standard',
          icon: 'icon_layers_two',
          price: '',
          description: 'More functionality & customization, for growing organization',
          buttonText: 'Get Standard',
          link: "#{URL_PREFIX}/signup?plan=standard&contacts=1000",
          featureTitle: 'Everything in Essentials',
          features: [
            'Automations',  
            'Textbanking',
            'Custom Site Domains',
            'All Page Types',
            'Multiple Chapters & Sub-organization',
            'Zapier Integration',
            'Demands Voting',
            'All Reporting Tools'
          ]
        },
        {
          name: 'Professional',
          icon: 'icon_layers_three',
          price: '',
          isPopular: true,
          description: 'High-performance organizing toolkit for growing organizations',
          buttonText: 'Get Professional',
          link: "#{URL_PREFIX}/signup?plan=professional&contacts=1000",
          featureTitle: 'Everything in Standard',
          features: [
            'Predictive Dialer',
            'Unlimited Team Members',
            'Calling AI: Call Summaries, Engagement Analysis & Transcriptions',
            'Full API Access',
            'Branded Calls',
            'Customizable Roles for Access Control',
            'Team Member Groups',
            'Geographic Branches',
            'No Email/Web Watermark',
            'Wholesale outreach rates: 1.4¢ per text, 20¢ per 1,000 emails, 3¢ per call minute'
          ]
        },
        {
          name: 'Enterprise',
          icon: 'icon_buildings',
          price: '',
          description: 'For organizations seeking enterprise-grade support & features',
          buttonText: 'Contact Us',
          link: "/schedule-a-demo?plan=enterprise&contacts=1000",
          featureTitle: 'Everything in Professional',
          features: [
                    "Custom Training & Onboarding",
                    "1-on-1 Zoom Support",
                    "Read Replica Database Access",
                    "Unlimited Contacts & Team Members",
                    "At-cost text, call, & email pricing"
                  ]
        },
      ]
    },
    table: {
      title: 'Compare features',
      headers: [
        {
          name: 'Essentials',
          price: '10',
          description: 'Basic features for up to 10 employees with everything you need.',
          buttonText: 'Select Plan',
          link: "#{URL_PREFIX}/signup?plan=essentials&contacts=1000",
        },
        {
          name: 'Standard',
          price: '20',
          description: 'Advanced features and reporting, better workflows and automation.',
          buttonText: 'Select Plan',
          link: "#{URL_PREFIX}/signup?plan=standard&contacts=1000",
        },
        {
          name: 'Professional',
          price: '40',
          isPopular: true,
          description: 'Personalised service and enterprise security for large teams.',
          buttonText: 'Select Plan',
          link: "#{URL_PREFIX}/signup?plan=professional&contacts=1000",
        },
        {
          name: 'Enterprise',
          price: '60',
          description: 'Personalised service and enterprise security for large teams.',
          buttonText: 'Get In Touch',
          link: "/schedule-a-demo?plan=enterprise&contacts=1000",
        }
      ],
      categories: [
        {
          name: 'Core features (CRM)',
          features: [
            {
              name: 'Store Contacts',
              values: [true, true, true, true],
              details: "Contacts are defined as people with contact information within an organization"
            },
            {
              name: 'Team Members Included',
              values: ['5', '25', 'Unlimited', 'Unlimited'],
              details: "The number of free team members (active organizers) allowed on this plan"
            },
            {
              name: 'Multichannel Inbox',
              values: [true, true, true, true],
              details: "Communicate with contacts by text, phone, and email from Solidarity Tech"
            },
            {
              name: 'Task Management',
              values: [true, true, true, true],
              details: "Assign follow-up tasks to team members"
            },
            {
              name: 'Follow-up Reminders',
              values: [true, true, true, true],
              details: "Receive customizable reminders for assigned tasks"
            },
            {
              name: 'Custom Properties',
              values: [2, 'Unlimited', 'Unlimited', 'Unlimited'],
              details: "Create custom fields unique to your organization"
            },
            {
              name: 'Automations',
              values: [false, true, true, true],
              details: "Create powerful workflows to streamline supporter engagement and organizing"
            },
            {
              name: 'People Notes',
              values: [true, true, true, true],
              details: "Add notes on your contacts to their record"
            },
            {
              name: 'Field app',
              values: [true, true, true, true],
              details: "Access to our free iOS and Android organizer app for phonebanking, textbanking, and in-field work organizing"
            },
            {
              name: 'Zapier',
              values: [false, true, true, true],
              details: "Connect Solidarity Tech to thousands of other apps with Zapier"
            },
          ]
        },
        {
          name: 'Calling & SMS',
          features: [
            {
              name: 'Built-in calling',
              values: [true, true, true, true],
              details: "Calling built-in to the admin dashboard and field app. Calling is charged based on usage"
            },
            {
              name: 'SMS (Send & Receive)',
              values: [true, true, true, true],
              details: "Texting from a local phone number is built-in to the admin dashboard and field app. Texting is charged based on usage"
            },
            
            {
              name: 'Shared group numbers',
              values: [true, true, true, true],
              details: "Use a consistent local phone number to communicate with all your contacts, regardless of which team member is communicating with them"
            },
            {
              name: 'Automatic call logging',
              values: [true, true, true, true],
              details: "All calls are automatically logged with caller, time, and duration, so you can ditch the manual call logging"
            },
            {
              name: 'Branded Calls',
              values: [false, false, true, true],
              details: "Contacts will see your organization's name (max 15 characters) in their caller ID when you call them, even if they haven't added your number to their contacts"
            },
            {
              name: 'Call Price (per minute)',
              values: ['$0.04', '$0.04', '$0.03', '$0.03'],
              details: "Unbeatable call pricing. Calls are charged per minute"
            },
            {
              name: 'Call Transcriptions',
              values: [false, false, true, true],
              details: "Transform every conversation into searchable text, ensuring you never miss a detail or lose valuable insights from your supporter interactions"
            },

            {
              name: 'Call Transcriptions Price (per hour)',
              values: [false, false, '$0.75', '$0.75'],
              details: ""
            },
            {
              name: 'AI Call Summaries (per call)',
              values: [false, false, '$0.10', '$0.10'],
              details: "Quickly grasp the essence of each call with AI-powered summaries & engagement analysis, enabling efficient review and follow-up on critical action points"
            },
            {
              name: 'SMS Price (per text segment)',
              values: ['$0.018', '$0.018', '$0.014', '$0.014'],
              details: "Unbeatable texting pricing. Texts are charged by SMS segment (160 characters)"
            },
            {
              name: 'MMS (Photo Message) Price',
              values: ['$0.05', '$0.05', '$0.04', '$0.04'],
              details: "Unbeatable photo message pricing."
            },
            {
              name: 'Text Blasts',
              values: [true, true, true, true],
              details: "Bulk SMS texts to contacts with optional dynamic template tags"
            },
            {
              name: 'Textbanking',
              values: [false, true, true, true],
              details: "High-performance peer-to-peer textbanking at unbeatably low messaging costs"
            },
            {
              name: 'SMS Templates',
              values: ['5', '25', 'Unlimited', 'Unlimited'],
              details: "Create and share SMS templates across your organization"
            },
            {
              name: 'Text-to-join keywords',
              values: ['2', '5', '10', 'Unlimited'],
              details: "Create and share SMS templates across your organization"
            },
            {
              name: '1-1 Assignment Phonebank',
              values: [true, true, true, true],
              details: "Personalized list-based phonebanking for effective, personal outreach"
            },
            {
              name: 'Power Dialer',
              values: [true, true, true, true],
              details: "Double your outbound call volume by seamlessly cycling through contact calls lists without the need for app-switching"
            },
            {
              name: 'Predictive Dialer',
              values: [false, false, true, true],
              details: "Automated dialer that allows your team to dial multiple number at once and be immediately connected to people who pick up the call"
            },
            {
              name: 'Voicemail drop',
              values: [false, false, true, true],
              details: "Automatically leave a pre-recorded message after the dialer reached someone's voicemail"
            },
            {
              name: 'Custom voicemail greeting',
              values: [true, true, true, true],
              details: "Record a custom voicemail to play when a contact calls your organization's phone number"
            },
          ]
        },
        {
          name: 'Email',
          features: [

            {
              name: 'Email blasts',
              values: [true, true, true, true],
              details:  "At-cost bulk email sends to contacts, with optional dynamic template tags"
            },
            {
              name: 'Custom email domains',
              values: ['1', '5', '50', 'Unlimited'],
              details: "Send your emails from addresses on your own domain (e.g. my-domain.org)"
            },
            {
              name: 'Email templates',
              values: [true, true, true, true],
              details: "Create and share email templates across your organization"
            },
            {
              name: 'Dynamic template tags',
              values: [true, true, true, true],
              details: "Enhance your email templates by incorporating tags (e.g., 'first name') to personalize your emails, enabling automatic population of the tags"
            },
            {
              name: 'Email open tracking',
              values: [true, true, true, true],
              details: "Know if your contacts are opening your emails"
            },
            {
              name: 'File attachments',
              values: [true, true, true, true],
              details: ""
            },
            {
              name: 'Scheduled email sends',
              values: [true, true, true, true],
              details: ""
            },
            {
              name: 'Email Price (per 1,000)',
              values: ['$0.25', '$0.25', '$0.20', '$0.20'],
              details: "Unbeatable email pricing. Quoted rate is cost for sending 1,000 emails"
            }
          ]
          
        },
        {
          name: 'Website',
          features: [
            {
              name: 'Fully branded websites',
              values: [true, true, true, true],
              details: "Use your multi-lingual, mobile-friendly included website as your primary site or as a secondary site for forms"
            },
            {
              name: 'Powerful action form builder',
              values: [true, true, true, true],
              details: "Unlock the potential for new campaigns with unique powerful automation. Also includes classic form types like surveys and petitions"
            },
            {
              name: 'Custom domains',
              values: [false, true, true, true],
              details: "Use your website from your own custom domain (my-domain.org) or subdomain (act.my-domain.org)"
            },
             {
              name: 'AI Page Translations',
              values: [true, true, true, true],
              details: "Instantly translate your pages into any supported language"
            },
            {
              name: 'Event, Petition, & Survey pages',
              values: [true, true, true, true],
              details: ""
            },
            {
              name: 'Schedule a call pages',
              values: [false, true, true, true],
              details: "Enable your contacts to schedule calls with your team members based on team member availability, language, and other customizable attributes"
            },
            {
              name: 'Email custom target pages',
              values: [true, true, true, true],
              details: "Trigger an email send to targets after a form submission. Form submission data can be merged into the email or a pdf attachment"
            },
            {
              name: 'Mail custom target pages',
              values: [false, true, true, true],
              details: "Trigger an USPS mail sends to targets after a form submission. Form submission data can be merged a pdf, which is then sent via mail to the target"
            },
            {
              name: 'Call legislator pages',
              values: [false, true, true, true],
              details: "Enable contacts to be connected with their geo-targeted legislators. Play them your pre-recorded message and immediately connect them to their representatives advance your campaign"
            },
            {
              name: 'Email legislator pages',
              values: [true, true, true, true],
              details: "Enable contacts to send emails to their geo-targeted legislators"
            },
            {
              name: 'Donation pages',
              values: [true, true, true, true],
              details: "Accept one-time and recurring donations from supporters"
            },
           {
              name: 'Donation transaction fee',
              values: ["3.9% + 30¢", "3.9% + 30¢", "3.9% + 30¢", "3.9% + 30¢"],
              details: "Accept one-time and recurring donations from supporters"
            },
            {
              name: 'HTTPS secure',
              values: [true, true, true, true],
              details: "Website transactions are fully encrypted with https protection"
            },
            {
              name: 'GDPR compliance',
              values: [true, true, true, true],
              details: "Optionally ask visitors for cookies permissions to stay within compliance of local regulations"
            },

          ]
        },
        {
          name: 'Events',
          features: [
            {
              name: 'Unified event management',
              values: [true, true, true, true],
              details: "Start organizing events and gather RSVPs from a variety of sources immediately. Use a basic event page or our integrated phonebanking and textbanking tools to gain RSVPs."
            },
            {
              name: 'In-person & virtual events',
              values: [true, true, true, true],
              details: "Support for both in-person events or events hosted via Zoom or other online platforms"
            },
            {
              name: 'Multi-shift & recurring events',
              values: [true, true, true, true],
              details: "Support for events with multiple shifts at various locations. Also, support for recurring events at pre-set periods (e.g. every last Tuesday of the month)"
            },
            {
              name: 'Event pages',
              values: [true, true, true, true],
              details: "Gather RSVPs from customizable, fully branded event page forms hosted on your website"
            },
            {
              name: 'Automated reminders',
              values: [true, true, true, true],
              details: "Send a contacts an email with a event details and calendar invitation immediately upon RSVP'ing. Ensure they don't forget, with customizable email and text reminders the day before and day-of the event"
            },
            {
              name: 'Attendance tracking',
              values: [true, true, true, true],
              details: "Easily add attendance either one-by-one or by uploading a CSV, to ensure that all event participation is stored and added to a contaft's activity timeline"
            },
          ]
        },
        {
          name: 'Reporting',
          features: [
            {
              name: 'Team performance reports',
              values: [true, true, true, true],
              details: "Stay up to date in real-time with a comprehensive overview of your team's ongoing activity, including calls, texts, follow-ups, assessments and more"
            },
            {
              name: 'Organizational activity reports',
              values: [true, true, true, true],
              details: ""
            },
            {
              name: 'Assessment progress reports',
              values: [true, true, true, true],
              details: "Generate reports that highlight the changes in assessment status of your contacts (e.g., transitioning from 'Supporter' to 'Potential Core') within a specified timeframe"
            },
            {
              name: 'Custom graphs',
              values: [false, true, true, true],
              details: "View your organization's data through our series of beautiful and informative graphs"
            },
            {
              name: 'Export reporting data',
              values: [false, true, true, true],
              details: "Export your organization's reporting data via png or csv"
            },

          ]
        },
        {
          name: 'Administration & Support',
          features: [
            {
              name: 'Roles & Permissions',
              values: [true, true, 'Customizable', 'Customizable'],
              details: "Manage the access control of team members within Solidarity Tech by assigning them to one of six pre-set roles. With the Professional plan, you can create a custom roles with specific permissions tailored to your needs"
            },
            {
              name: 'Multiple chapters & sub-organizations',
              values: [false, true, true, true],
              details: "Match the real-world federated structure of your organization by creating multiple chapters"
            },
            {
              name: 'Geographic Branches',
              values: [false, false, true, true],
              details: "Break down a chapter into custom-drawn geographic regions to do neighborhood-based organizing. For example, break down a 'Manhattan' chapter into clusters (Uptown, Midtown, lower Manhattan, etc.) and contacts will be automatically assigned their correct branch"
            },
            {
              name: 'Team member groups',
              values: [false, false, true, true],
              details: "Improve reporting efficiency by organizing your team into groupss."
            },
           
            {
              name: 'Self-service help',
              values: [true, true, true, true],
              details: "Use our expansive & integrated documentation to understand how to best use Solidarity Tech"
            },
            {
              name: 'Chat & Email Support',
              values: [true, true, true, true],
              details: "Chat support through the Intercom widget in the admin dashboard"
            },
            {
              name: 'Unlimited contact list size',
              values: [false, false, false, true],
              details: "No limits on the amount of contacts you can have in your organization"
            },
            {
              name: '1-on-1 onboarding support',
              values: [false, false, false, true],
              details: "Get custom help configuring your Solidarity Tech environment, including help migrating from your previous CRM and setting up your ideal organizing processes"
            },
            {
              name: 'Customized training ',
              values: [false, false, false, true],
              details: "Customized training to ensure that Solidarity Tech seamlessly fits into your organization"
            },
            {
              name: 'Screen share support',
              values: [false, false, false, true],
              details: "Receive assistance through a Zoom call, which includes the option for screen sharing. This support service is available upon scheduling an appointment."
            },
          ]
        },
      ]
    },
    faq: {
      title: 'FAQs',
      subtitle: 'Support',
      description: 'Everything you need to know about the product and billing. Can’t find the answer you’re looking for? Please <a href="/schedule-a-demo">schedule a call with us</a>.',
      questions: [
        {
          question: 'What is a contact?',
          answer: 'A contact is a single person you have recorded in your account. Think of 1 phone number as being 1 contact.'
        },
        {
          question: 'What happens if I hit my contact limit?',
          answer: "You'll receive an email that you went over your limit, at which point you can either upgrade your plan or keep your current plan and pay an overage charge per additional contact."
        },
        {
          question: 'How quickly can I start using my account?',
          answer: 'Immediately. If you sign up today, you can start integrating and adding data to Solidarity Tech right away.'
        },
        {
          question: 'How do I switch to a different plan?',
          answer: 'You can switch to a new plan at any time by going to the Billing page in the admin dashboard. Select the plan you’d like to switch to and immediately start using new features.'
        },
        {
          question: 'What payment methods do you offer?',
          answer: 'We accept all major credit and debit cards'
        },
        {
          question: 'Do you have a setup cost?',
          answer: 'Absolutely not. All plans are on a month to month with no contracts, no setup fees, and no hidden gimmicks. Cancel anytime.'
        },
        {
          question: 'Does Solidarity Tech own the data I put into the system?',
          answer: 'No, your data remains exclusively yours. You only allow us to use it to provide you with our services. For further information, please refer to our privacy policy.'
        },
        {
          question: 'What if I want to cancel?',
          answer: 'You can cancel anytime from the billing page in the admin dashboard.'
        },
      ]
    }
  }.freeze

  SINGUP_FORM = {
    title: 'Sign up',
    fields: [
      {
        name: 'full_name',
        type: 'text',
        label: 'Full name',
        required: true,
        placeholder: 'Enter your full name',
      },
      {
        name: 'email',
        type: 'email',
        label: 'Email',
        required: true,
        placeholder: 'Enter you email',
      },

    ],
    button: {
      text: 'Get started',
      link: "https://dashboard.solidarity.tech/signup-extra"
    }
  }.freeze

  SINGUP_FORM_EXTRA = {
    title: 'Sign up',
    fields: [
      {
        name: 'phone',
        type: 'text',
        label: 'Phone',
        required: true,
        placeholder: 'Enter phone number',
      },
      {
        name: 'password',
        type: 'password',
        label: 'Password',
        required: true,
        placeholder: 'Create a password',
        comment: 'Must be at least 8 characters.'
      }
    ],
    button: {
      text: 'Continue',
    }
  }.freeze

  INDUSTRIES_NON_PROFITS = {
    hero: {
      label: {
        text: 'Nonprofits',
        icon: 'icon_industries',
      },
      title: 'Every cause needs a voice. Amplify yours with Solidarity Tech',
      description:
        'Solidarity Tech offers a comprehensive platform for fundraising, volunteer management, and community engagement. Drive action with powerful calling, texting, and email features, all seamlessly integrated to support your mission.',
      image: {
        fromLeft: '0.001%',
        fromRight: '0.001%',
        src: 'industries_non_profits_hero',
      },
      bg_image: {
        src: 'hero_blur_bg',
      },
      overlay_image: {
        src: 'industries_non_profits_hero_overlay',
      },
      colors: {
        background: '#F5F6FB',
        shadow_left: 'rgba(180,218,232,0.5)',
        shadow_right: 'rgba(108,229,255,0.35)',
      },
    },
    tech_stack: {
      title: 'Complete, Modern Union <br> Organizing Tech Stack',
      cards: [
        {
          title: 'Build Deep Volunteer Relationships',
          description: 'Turn one-time volunteers into leaders through scheduled 1:1 calls, personalized text/phone outreach, and automated follow-up workflows that maintain meaningful connections.',
          icon: 'icon_handshake'
        },
        {
          title: 'Powerful Outreach Tools',
          description: 'Scale your impact with integrated phone banking, text banking, and predictive dialing. Run efficient donor outreach campaigns and boost event turnout while keeping your team focused on what matters.',
          icon: 'icon_statistic_board'
        },
        {
          title: 'Seamless Donor Management',
          description: 'Drive recurring donations and grow supporter participation with powerful donation pages, customizable forms, and integrated communications.',
          icon: 'icon_heart_hand'
        },
        {
          title: 'Data-Driven Impact',
          description: 'Track supporter engagement, measure campaign success, and generate custom reports that demonstrate your organization\'s impact to stakeholders and funders.',
          icon: 'icon_chart_pie_space'
        },
      ],
    },
    logos_block: {
      title: 'Trusted by leading labor & progressive organizations.',
      logos: ['logo_dc', 'logo_hcc', 'logo_dsa', 'logo_pwc', 'logo_sgv']
    },
    trigger_block_v_1: {
      title: 'The complete toolkit for building worker power',
      text: 'Gather more leads, convert them into members, and build solidarity within your existing base. Perfect for both growing your union and deepening member engagement.',
      image: { src: 'industries_non_profits_trigger_block_v_1', position: 'left' },
      colors: {
        background: '#FFFFFF',
        shadow: '#FFFFFF',
        text: '#000000',
        text_secondary: '#575757',
      },
      triggers: [
        {
          icon: 'icon_headphones',
          title: 'More conversations, less effort',
          text: 'Launch phonebanks and textbanks instantly, including with our high-performance predictive dialer. Connect organizers directly to answered calls, eliminating manual dialing and voicemails.',
        },
        {
          icon: 'icon_form',
          title: 'Powerful action forms',
          text: 'Create websites and customizable forms that serve any need - process donations securely, mobilize supporters for advocacy, and help donors connect with your team for deeper engagement.',
        },
        {
          icon: 'icon_calendar',
          title: 'Automate event turnout',
          text: 'Send automated event reminders via text, email, and calls. Track RSVPs and attendance while our system handles confirmation emails and calendar invites.',
        },
      ],
    },
    trigger_block_v_2: {
      image: { src: 'industries_non_profits_trigger_block_v_2', position: 'right' },
      colors: {
        background: '#FFFFFF',
        shadow: '#FFFFFF',
        text: '#000000',
        text_secondary: '#575757',
      },
      triggers: [
        {
          icon: 'icon_arrow_growth',
          title: 'Drive fundraising success',
          text: 'Monitor donation campaigns and measure supporter engagement to ensure you\'re meeting your goals. Build strong donor relationships that sustain your mission long-term.',
        },
        {
          icon: 'icon_workflow',
          title: 'Track member development',
          text: 'Measure every member\'s journey with custom assessment levels. Automatically create follow-up tasks and track leadership development progress in real-time.',
        },
        {
          icon: 'icon_translation',
          title: 'Multilingual outreach tools',
          text: 'Break language barriers in your organizing drives with support for 92 languages. Route bilingual organizers to workers who share their language preferences.',
        },
      ],
    },
    industries_features: {
      image: { src: 'industries_features_hero' },
      features: [
        {
          title: 'Easily onboard and manage volunteers and staff',
          description: 'Add organizers quickly through the dashboard or self-registration. No seat-based pricing means you can build teams of any size.'
        },
        {
          title: 'Mobile app lets your team campaign from anywhere',
          description: 'Your team can run campaigns anywhere using Solidarity Tech\'s mobile app on their own phones, so no extra device costs. Download, log in, and start making calls.'
        },
        {
          title: 'Set up distinct union chapters and user roles',
          description: 'Create chapters based on geography, employers, or campaigns. Set granular permissions to manage staff and volunteer access levels.'
        },
        {
          title: 'Boost Answer Rates with Local Numbers',
          description: 'Make it easier for members to recognize and answer calls by reaching them with familiar, local numbers.'
        },
        {
          title: 'Automatically Track All Member Interactions',
          description: 'Capture every call, text, email, RSVP, website visit, and form submission in one place—no manual updates needed.'
        },
        {
          title: 'See Who Clicks Your Links in Emails & Texts',
          description: 'Track link clicks in texts and emails to understand member interest and follow up with the right people.'
        },
      ],
    },
    sub_menu_block: {
      title: 'Everything you need to win campaigns',
    },
    tools_block: {
      title: 'Essential Tools for Growing Union Strength',
      subtitle: 'From organizing drives to ongoing engagement, Solidarity Tech equips unions with everything they need to organize, mobilize, and help workers win.',
      items: [
        { title: 'Built for Union Growth, Not Investor Metrics', description: 'Designed specifically to strengthen union power. Solidarity Tech focuses on real organizing goals rather than corporate metrics, offering tools that build connections and foster long-term union growth.' },
        { title: 'Activate Members with Flexible Automations', description: 'Engage members with timely, personalized interactions. Use powerful automations to send welcome sequences, event reminders, surveys, and more—keeping members involved and informed at every stage.' },
        { title: 'Insights Without a Data Analyst', description: 'Access clear, actionable insights instantly. With simplified analytics, you can interpret engagement data and make strategic decisions without the need for complex data analysis.' },
        { title: 'Map Member Connections & Influence', description: 'Identify leaders and visualize member connections. Map relationships between members and organizers, building a network that strengthens union cohesion and influence.' },
        { title: 'Scale Outreach During High-Stakes Moments', description: 'Rapidly increase outreach when it matters most. Whether organizing a strike or driving turnout for key actions, Solidarity Tech lets you mobilize supporters on a large scale quickly.' },
        { title: 'Build Union Recognition with Branded Tools', description: 'Reinforce your identity across interactions. Use contact cards, branded calls, emails, and a custom website to make your union’s presence memorable.' },
        { title: 'Full Control of Member Data and Privacy', description: 'Union data stays secure and accessible only to you. With strong privacy protections, Solidarity Tech ensures you retain ownership and control of your members\' data, aligning with union values.' },
        { title: 'Dedicated Support for Organizers', description: 'Access support from people who understand unions. Get help when you need it from a team experienced in union organizing, ready to help you use Solidarity Tech to its fullest.' },
      ],
    },
    faq: {
      title: 'Frequently Asked Questions',
      subtitle: 'SUPPORT',
      description: 'Everything you need to know about the product and billing. Can\'t find the answer you\'re looking for? Please <a href="/schedule-a-demo">chat to our friendly team</a>.',
      questions: [
        {
          question: 'What is union software?',
          answer: 'Union software helps labor unions, tenant unions, and debtor unions organize their members and run campaigns. Modern union software combines member management, communication tools, and organizing features in one platform to help unions grow membership, mobilize supporters, and win campaigns.'
        },
        {
          question: 'What counts as a contact?',
          answer: 'Union software helps labor unions, tenant unions, and debtor unions organize their members and run campaigns. Modern union software combines member management, communication tools, and organizing features in one platform to help unions grow membership, mobilize supporters, and win campaigns.'
        },
        {
          question: 'Is Solidarity Tech multilingual?',
          answer: 'Union software helps labor unions, tenant unions, and debtor unions organize their members and run campaigns. Modern union software combines member management, communication tools, and organizing features in one platform to help unions grow membership, mobilize supporters, and win campaigns.'
        },
        {
          question: 'How quickly can I start using my account?',
          answer: 'Union software helps labor unions, tenant unions, and debtor unions organize their members and run campaigns. Modern union software combines member management, communication tools, and organizing features in one platform to help unions grow membership, mobilize supporters, and win campaigns.'
        },
        {
          question: 'Does Solidarity Tech own the data I put into the system?',
          answer: 'Union software helps labor unions, tenant unions, and debtor unions organize their members and run campaigns. Modern union software combines member management, communication tools, and organizing features in one platform to help unions grow membership, mobilize supporters, and win campaigns.'
        },
        {
          question: 'What makes Solidarity Tech different from basic CRM tools?',
          answer: 'Union software helps labor unions, tenant unions, and debtor unions organize their members and run campaigns. Modern union software combines member management, communication tools, and organizing features in one platform to help unions grow membership, mobilize supporters, and win campaigns.'
        },
      ],
    },
  }.freeze

  INDUSTRIES_UNIONS = {
    hero: {
      label: {
        text: 'Nonprofits',
        icon: 'icon_industries',
      },
      title: 'Organize Smarter, Build Stronger Unions',
      description:
        'Solidarity Tech is the all-in-one digital platform that transforms how unions connect, engage, and mobilize their members to win',
      image: {
        fromLeft: '0.001%',
        fromRight: '0.001%',
        src: 'industries_non_profits_hero',
      },
      bg_image: {
        src: 'hero_blur_bg',
      },
      overlay_image: {
        src: 'industries_non_profits_hero_overlay',
      },
      colors: {
        background: '#F5F6FB',
        shadow_left: 'rgba(180,218,232,0.5)',
        shadow_right: 'rgba(108,229,255,0.35)',
      },
    },
    tech_stack: {
      title: 'Complete, Modern Union <br> Organizing Tech Stack',
      cards: [
        {
          title: 'Build Solidarity & Leadership',
          description: 'Transform your contact list into an organized base through systematic relationship building. Schedule 1:1 calls, track member development, and grow your core membership with tools designed for deep organizing.',
          icon: 'icon_fire'
        },
        {
          title: 'Drive Action',
          description: 'Mobilize members instantly through integrated phonebanks, textbanks, and email/text blasts. Move supporters up the ladder of engagement with personalized outreach and automated follow-ups that maximize turnout.',
          icon: 'icon_structure'
        },
        {
          title: 'Win Campaigns',
          description: 'Run coordinated campaigns that leverage every organizing tool seamlessly. From member signup to direct actions, merge offline organizing with digital tools that demonstrate your union\'s power."',
          icon: 'icon_leaderboard'
        },
        {
          title: 'Grow Membership',
          description: 'Turn website visitors and campaign supporters into union members through a proven digital organizing pipeline. Reach workers in multiple languages, capture new signups automatically, and convert interest into active membership.',
          icon: 'icon_chart_pie_no_segment'
        },
      ],
    },
    logos_block: {
      title: 'Trusted by leading labor & progressive organizations.',
      logos: ['logo_cwa', 'logo_dc', 'logo_pwc', 'logo_rdu', 'logo_uaw', 'logo_ufcw']
    },
    trigger_block_v_1: {
      title: 'The complete toolkit for building worker power',
      text: 'Gather more leads, convert them into members, and build solidarity within your existing base. Perfect for both growing your union and deepening member engagement.',
      image: { src: 'industries_non_profits_trigger_block_v_1', position: 'left' },
      colors: {
        background: '#FFFFFF',
        shadow: '#FFFFFF',
        text: '#000000',
        text_secondary: '#575757',
      },
      triggers: [
        {
          icon: 'icon_headphones',
          title: 'More conversations, less effort',
          text: 'Launch phonebanks and textbanks instantly, including with our high-performance predictive dialer. Connect organizers directly to answered calls, eliminating manual dialing and voicemails.',
        },
        {
          icon: 'icon_form',
          title: 'Powerful action forms',
          text: 'Create websites and customizable forms that serve any need - process donations securely, mobilize supporters for advocacy, and help donors connect with your team for deeper engagement.',
        },
        {
          icon: 'icon_calendar',
          title: 'Automate event turnout',
          text: 'Send automated event reminders via text, email, and calls. Track RSVPs and attendance while our system handles confirmation emails and calendar invites.',
        },
      ],
    },
    trigger_block_v_2: {
      image: { src: 'industries_non_profits_trigger_block_v_2', position: 'right' },
      colors: {
        background: '#FFFFFF',
        shadow: '#FFFFFF',
        text: '#000000',
        text_secondary: '#575757',
      },
      triggers: [
        {
          icon: 'icon_arrow_growth',
          title: 'Drive fundraising success',
          text: 'Monitor donation campaigns and measure supporter engagement to ensure you\'re meeting your goals. Build strong donor relationships that sustain your mission long-term.',
        },
        {
          icon: 'icon_workflow',
          title: 'Track member development',
          text: 'Measure every member\'s journey with custom assessment levels. Automatically create follow-up tasks and track leadership development progress in real-time.',
        },
        {
          icon: 'icon_translation',
          title: 'Multilingual outreach tools',
          text: 'Break language barriers in your organizing drives with support for 92 languages. Route bilingual organizers to workers who share their language preferences.',
        },
      ],
    },
    industries_features: {
      image: { src: 'industries_features_hero' },
      features: [
        {
          title: 'Easily onboard and manage volunteers and staff',
          description: 'Add organizers quickly through the dashboard or self-registration. No seat-based pricing means you can build teams of any size.'
        },
        {
          title: 'Mobile app lets your team campaign from anywhere',
          description: 'Your team can run campaigns anywhere using Solidarity Tech\'s mobile app on their own phones, so no extra device costs. Download, log in, and start making calls.'
        },
        {
          title: 'Set up distinct union chapters and user roles',
          description: 'Create chapters based on geography, employers, or campaigns. Set granular permissions to manage staff and volunteer access levels.'
        },
        {
          title: 'Boost Answer Rates with Local Numbers',
          description: 'Make it easier for members to recognize and answer calls by reaching them with familiar, local numbers.'
        },
        {
          title: 'Automatically Track All Member Interactions',
          description: 'Capture every call, text, email, RSVP, website visit, and form submission in one place—no manual updates needed.'
        },
        {
          title: 'See Who Clicks Your Links in Emails & Texts',
          description: 'Track link clicks in texts and emails to understand member interest and follow up with the right people.'
        },
      ],
    },
    sub_menu_block: {
      title: 'Everything you need to win campaigns',
    },
    tools_block: {
      title: 'Essential Tools for Growing Union Strength',
      subtitle: 'From organizing drives to ongoing engagement, Solidarity Tech equips unions with everything they need to organize, mobilize, and help workers win.',
      items: [
        { title: 'Built for Union Growth, Not Investor Metrics', description: 'Designed specifically to strengthen union power. Solidarity Tech focuses on real organizing goals rather than corporate metrics, offering tools that build connections and foster long-term union growth.' },
        { title: 'Activate Members with Flexible Automations', description: 'Engage members with timely, personalized interactions. Use powerful automations to send welcome sequences, event reminders, surveys, and more—keeping members involved and informed at every stage.' },
        { title: 'Insights Without a Data Analyst', description: 'Access clear, actionable insights instantly. With simplified analytics, you can interpret engagement data and make strategic decisions without the need for complex data analysis.' },
        { title: 'Map Member Connections & Influence', description: 'Identify leaders and visualize member connections. Map relationships between members and organizers, building a network that strengthens union cohesion and influence.' },
        { title: 'Scale Outreach During High-Stakes Moments', description: 'Rapidly increase outreach when it matters most. Whether organizing a strike or driving turnout for key actions, Solidarity Tech lets you mobilize supporters on a large scale quickly.' },
        { title: 'Build Union Recognition with Branded Tools', description: 'Reinforce your identity across interactions. Use contact cards, branded calls, emails, and a custom website to make your union’s presence memorable.' },
        { title: 'Full Control of Member Data and Privacy', description: 'Union data stays secure and accessible only to you. With strong privacy protections, Solidarity Tech ensures you retain ownership and control of your members\' data, aligning with union values.' },
        { title: 'Dedicated Support for Organizers', description: 'Access support from people who understand unions. Get help when you need it from a team experienced in union organizing, ready to help you use Solidarity Tech to its fullest.' },
      ],
    },
    faq: {
      title: 'Frequently Asked Questions',
      subtitle: 'SUPPORT',
      description: 'Everything you need to know about the product and billing. Can\'t find the answer you\'re looking for? Please <a href="/schedule-a-demo">chat to our friendly team</a>.',
      questions: [
        {
          question: 'What is union software?',
          answer: 'Union software helps labor unions, tenant unions, and debtor unions organize their members and run campaigns. Modern union software combines member management, communication tools, and organizing features in one platform to help unions grow membership, mobilize supporters, and win campaigns.'
        },
        {
          question: 'What counts as a contact?',
          answer: 'Union software helps labor unions, tenant unions, and debtor unions organize their members and run campaigns. Modern union software combines member management, communication tools, and organizing features in one platform to help unions grow membership, mobilize supporters, and win campaigns.'
        },
        {
          question: 'Is Solidarity Tech multilingual?',
          answer: 'Union software helps labor unions, tenant unions, and debtor unions organize their members and run campaigns. Modern union software combines member management, communication tools, and organizing features in one platform to help unions grow membership, mobilize supporters, and win campaigns.'
        },
        {
          question: 'How quickly can I start using my account?',
          answer: 'Union software helps labor unions, tenant unions, and debtor unions organize their members and run campaigns. Modern union software combines member management, communication tools, and organizing features in one platform to help unions grow membership, mobilize supporters, and win campaigns.'
        },
        {
          question: 'Does Solidarity Tech own the data I put into the system?',
          answer: 'Union software helps labor unions, tenant unions, and debtor unions organize their members and run campaigns. Modern union software combines member management, communication tools, and organizing features in one platform to help unions grow membership, mobilize supporters, and win campaigns.'
        },
        {
          question: 'What makes Solidarity Tech different from basic CRM tools?',
          answer: 'Union software helps labor unions, tenant unions, and debtor unions organize their members and run campaigns. Modern union software combines member management, communication tools, and organizing features in one platform to help unions grow membership, mobilize supporters, and win campaigns.'
        },
      ],
    },
  }.freeze

  CTA_BLOCK = {
    title: 'Ready to win?',
    subtitle: 'Sign up now and start organizing in minutes.',
    button: {
      text: 'Get Started Now',
      url: '/pricing',
    },
    support: {
      text: 'Have questions?',
      link: {
        text: 'Talk to sales.',
        url: '/schedule-a-demo',
      },
    },
  }.freeze

end
