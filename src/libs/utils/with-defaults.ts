import React from "react";

// default propと一緒にexportするためのutilのつもりだけどうまくできない
// const withDefaults = <P, DP>(component: React.ComponentType<P>, defaultProps: DP) => {
//     type Props = Partial<DP> & Omit<P, keyof DP>;
//     component.defaultProps = defaultProps;
//
//     return component as React.ComponentType<Props>;
// };
//
// export default withDefaults;
