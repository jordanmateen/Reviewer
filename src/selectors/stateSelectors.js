export const getReviewerName = (state) => {
    const firstName = state.review?.firstName;
    const lastName = state.review?.lastName
    return `${firstName} ${lastName}`
}