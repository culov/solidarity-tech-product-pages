module.exports = {
    // prefix: 'tw-',
    theme: {
        screens: {
            'sm': '576px',
            'md': '768px',
            'lg': '992px',
            'xl': '1200px',
        }
    },
    purge: {
        enabled: process.env.RAILS_ENV === "production",
        content: ['./**/*.html', './**/*.html.erb'],
        whitelistPatterns: [/select2-/]
    }
}