module.exports = {
    collectCoverageFrom: [
        "**/*.{js,jsx,ts,tsx}",
        "!**/*.d.ts",
        "!**/node_modules/**",
    ],
    moduleNameMapper: {
        "^@/components/(.*)$": "<rootDir>/components/$1",
        "^@/assets/(.*)$": "<rootDir>/assets/$1",
        "^@/lib/(.*)$": "<rootDir>/lib/$1",
    },
    testPathIgnorePatterns: ["<rootDir>/node_modules/", "<rootDir>/.next/", "<rootDir>/prisma/"],
    transform: {
        // "\\.[jt]sx?$": "babel-jest"
        "^.+\\.(js|jsx|ts|tsx)$": ["babel-jest", { presets: ["next/babel"] }],
        "^.+\\.tsx?$": "ts-jest",
    },
    transformIgnorePatterns: [
        "/node_modules/",
        "^.+\\.module\\.(css|sass|scss)$",
    ],
    setupFilesAfterEnv: [
        // "@testing-library/react/cleanup-after-each",
        "@testing-library/jest-dom/extend-expect"
    ],
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
    testEnvironment: "jsdom",
    verbose: true,
}